import React, { useState } from 'react';

import ClockFace from '../ClockFace';
import { SwitchWrapper, Title } from './Timer.styled';
import TimerSwitcher from '../TimerSwitcher';

const Timer: React.FC = () => {
    const [activeTimerType, switchActiveTimerType] = useState<string>('pomodoro');

    return (
        <>
            <Title>pomodoro</Title>
            <SwitchWrapper>
                <TimerSwitcher activeTimerType={activeTimerType} switchActiveTimerType={switchActiveTimerType}/>
            </SwitchWrapper>
            <ClockFace/>
        </>
    );
};

export default Timer;