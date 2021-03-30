import React, { useState } from 'react';

import * as customModalComponents from './ModalWindow.styled';

import cross from '../../assets/icon-close.svg';
import { Container } from '../../common/styledComponents';

import TimeUnit from './TimeUnit';
import { theme, themeList, themeProps } from 'themes';
import { withTheme } from 'styled-components';
import { timerConfig } from 'timer';

const {
          Overlay,
          Modal,
          Header,
          Subtitle,
          MainContent,
          DivLine,
          TimeSelection,
          FontSelection,
          PrimaryColorSelection,
          FontOption,
          OptionWrapper,
          PrimaryColorOption,
          ApplyingChanges,
          CloseButton
      } = customModalComponents;

interface ModalWindowProps {
    switchThemeValue: (propName: themeProps, newValueNumber: number) => void,
    themeList: themeList
    closeModal: () => void,
    theme: theme,
    changeTimerConfig: (newConfig: timerConfig) => void,
    timerConfig: timerConfig,
}

const ModalWindow: React.FC<ModalWindowProps> = ({
                                                     closeModal,
                                                     themeList,
                                                     switchThemeValue,
                                                     theme,
                                                     timerConfig,
                                                     changeTimerConfig
                                                 }) => {
    const generateInitialState = (propName: themeProps): number => {
        return themeList[propName].findIndex(value => value === theme[propName]);
    };

    const [currentFontNumber, setCurrentFontNumber] = useState(generateInitialState('font'));
    const [currentPrimaryColorNumber, setCurrentPrimaryColorNumber] = useState(generateInitialState('primaryColor'));

    const [newLocalTimerConfig, setNewLocalTimerConfig] = useState<timerConfig>(timerConfig);

    const applyingHandler = (): void => {
        if (themeList.font[currentFontNumber] !== theme.font) {
            switchThemeValue('font', currentFontNumber);
        }

        if (themeList.primaryColor[currentPrimaryColorNumber] !== theme.primaryColor) {
            switchThemeValue('primaryColor', currentPrimaryColorNumber);
        }

        if (!Object.is(newLocalTimerConfig, timerConfig)) {
            changeTimerConfig(newLocalTimerConfig);
        }

        closeModal();
    };

    const fontOptionRender = () => {
        return themeList.font.map((fontFamily, idx) => {
            return <FontOption active={currentFontNumber === idx}
                               fontFamily={fontFamily}
                               className='focus'
                               onClick={() => setCurrentFontNumber(idx)}
                               key={fontFamily}>Aa</FontOption>;
        });
    };

    const colorOptionRender = () => {
        return themeList.primaryColor.map((color, idx) => {
            return <PrimaryColorOption active={currentPrimaryColorNumber === idx}
                                       onClick={() => setCurrentPrimaryColorNumber(idx)}
                                       className='focus'
                                       backgroundColor={color}
                                       key={color}/>;
        });
    };

    const timerInputsRender = (): React.ReactNode[] => {
        return Object.entries(newLocalTimerConfig).map(data => {
            const [label, value] = data;

            return <TimeUnit key={label} changeTimeConfig={setNewLocalTimerConfig} value={value / 60} label={label}/>;
        });
    };

    return (
        <Overlay>
            <Modal width={[.9, .8, .6, .4]}>
                <Container>
                    <Header>
                        <h2>Settings</h2>
                        <CloseButton className='focus' onClick={closeModal}><img src={cross} alt="close"/></CloseButton>
                    </Header>
                </Container>
                <DivLine/>
                <Container>
                    <MainContent>
                        <Subtitle>Time (Minutes)</Subtitle>
                        <TimeSelection
                            flexDirection={['column', 'row', 'row', 'row']}
                            alignItems={['flex-start', '', '', '']}>
                            {timerInputsRender()}
                        </TimeSelection>
                        <DivLine/>
                        <FontSelection flexDirection={['column', 'row', 'row', 'row']}>
                            <Subtitle>Font</Subtitle>
                            <OptionWrapper>
                                {fontOptionRender()}
                            </OptionWrapper>
                        </FontSelection>
                        <DivLine/>
                        <PrimaryColorSelection
                            flexDirection={['column', 'row', 'row', 'row']}>
                            <Subtitle>Color</Subtitle>
                            <OptionWrapper>
                                {colorOptionRender()}
                            </OptionWrapper>
                        </PrimaryColorSelection>
                    </MainContent>
                </Container>
                <ApplyingChanges onClick={applyingHandler} className='focus' width={140}>Apply</ApplyingChanges>
            </Modal>
        </Overlay>
    );
};

export default withTheme(ModalWindow);