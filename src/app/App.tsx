import React, { useState } from 'react';

import Timer from '../components/Timer';
import { Portal } from '../common/containers';
import ModalWindow from '../components/ModalWindow';
import { useThemes, useTimerConfig } from '../common/hooks';
import { ThemeProvider } from 'styled-components';
import CommonStyles from '../index.styled';

import themes from './themes';

const App: React.FC = () => {
    const { theme, switchThemeValue } = useThemes();
    const { timerConfig, changeTimerConfig } = useTimerConfig();

    const [isModalActive, toggleModal] = useState<boolean>(false);

    const Modal = isModalActive
        ?
        <Portal id='modal-root'>
            <ModalWindow changeTimerConfig={changeTimerConfig}
                         switchThemeValue={switchThemeValue}
                         themeList={themes}
                         closeModal={() => toggleModal(false)}
                         timerConfig={timerConfig}
            />
        </Portal>
        : null;


    return (
        <ThemeProvider theme={theme}>
            <CommonStyles fontSize={[9, 11, 13, 15, 16]} font={theme.font}/>
            <Timer config={timerConfig} openModal={() => toggleModal(true)}/>
            {Modal}
        </ThemeProvider>
    );
};

export default App;