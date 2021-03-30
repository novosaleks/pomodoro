import React, { useState } from 'react';

import ClockFace from '../ClockFace';
import { SwitchWrapper, Title, SettingsButton } from './Timer.styled';
import TimerSwitcher from '../TimerSwitcher';

import { Container } from '../../common/styledComponents';

import settingsIcon from '../../assets/icon-settings.svg';
import { timerConfig, timerType } from 'timer';

interface TimerProps {
    openModal: () => void,
    config: timerConfig,
}

const Timer: React.FC<TimerProps> = ({ openModal, config }) => {
    const [activeTimerType, switchActiveTimerType] = useState<timerType>('pomodoro');

    return (
        <Container width={1}>
            <Title>pomodoro</Title>
            <SwitchWrapper>
                <TimerSwitcher activeTimerType={activeTimerType} switchActiveTimerType={switchActiveTimerType}/>
            </SwitchWrapper>
            <ClockFace initValue={config[activeTimerType]} timerType={activeTimerType}
                       toggleTimer={switchActiveTimerType}/>
            <SettingsButton onClick={openModal} className='focus'>
                <img src={settingsIcon} alt="settings"/>
            </SettingsButton>
        </Container>
    );
};

export default Timer;