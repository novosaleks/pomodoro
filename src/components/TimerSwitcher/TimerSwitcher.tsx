import React from 'react';

import { Switcher, SwitcherItem } from './TimerSwitcher.styled';

const TimerSwitcher: React.FC = () => {
    return (
        <Switcher>
            <SwitcherItem active width={120}>Click Me</SwitcherItem>
            <SwitcherItem width={120}>Click Me</SwitcherItem>
            <SwitcherItem width={120}>Click Me</SwitcherItem>
        </Switcher>
    );
};

export default TimerSwitcher;