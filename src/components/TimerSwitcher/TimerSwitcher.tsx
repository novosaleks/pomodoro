import React, { Dispatch, SetStateAction } from 'react';

import { Switcher, SwitcherItem } from './TimerSwitcher.styled';

interface TimerSwitcherProps {
    switchActiveTimerType: Dispatch<SetStateAction<string>>,
    activeTimerType: string,
}

const TimerSwitcher: React.FC<TimerSwitcherProps> = ({ switchActiveTimerType, activeTimerType }) => {

    const onClickHandler = (e: React.MouseEvent<HTMLDivElement>): void => {
        const target = e.target as typeof e.target & {
            dataset: { type: string };
        };

        if (target.dataset.type) {
            switchActiveTimerType(target.dataset.type);
        }
    };

    const renderItems = (labels: string[]): React.ReactNode[] => {
        return labels.map(label => {
            return <SwitcherItem key={label}
                                 data-type={label}
                                 active={activeTimerType === label}
                                 width={120}>{label}</SwitcherItem>;
        });
    };

    return (
        <Switcher onClick={onClickHandler}>
            {renderItems(['pomodoro', 'short break', 'long break'])}
        </Switcher>
    );
};

export default TimerSwitcher;