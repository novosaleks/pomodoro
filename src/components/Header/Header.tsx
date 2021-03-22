import React from 'react';

import { Title, SwitchWrapper } from './Header.styled';
import TimerSwitcher from '../TimerSwitcher';

const Header: React.FC = () => {
    return (
        <header>
            <Title>pomodoro</Title>
            <SwitchWrapper>
                <TimerSwitcher/>
            </SwitchWrapper>
        </header>
    );
};

export default Header;