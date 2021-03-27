import React, { useState } from 'react';

import ClockFace from '../ClockFace';
import { SwitchWrapper, Title, Container, SettingsButton } from './Timer.styled';
import TimerSwitcher from '../TimerSwitcher';

import settingsIcon from '../../assets/icon-settings.svg';

const Timer: React.FC = () => {
    const [activeTimerType, switchActiveTimerType] = useState<string>('pomodoro');

    return (
        <Container width={1/2}>
            <Title>pomodoro</Title>
            <SwitchWrapper>
                <TimerSwitcher activeTimerType={activeTimerType} switchActiveTimerType={switchActiveTimerType}/>
            </SwitchWrapper>
            <ClockFace timerType={activeTimerType} togglePomodoro={() => switchActiveTimerType('pomodoro')}/>
            <SettingsButton className='focus'><img src={settingsIcon} alt="settings"/></SettingsButton>
        </Container>
    );
};

export default Timer;