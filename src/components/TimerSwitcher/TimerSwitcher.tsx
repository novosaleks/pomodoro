import React, { Dispatch, SetStateAction } from 'react';

import { Switcher, SwitcherItem } from './TimerSwitcher.styled';
import { timerType } from 'timer';

interface TimerSwitcherProps {
    switchActiveTimerType: Dispatch<SetStateAction<timerType>>,
    activeTimerType: timerType,
}

const TimerSwitcher: React.FC<TimerSwitcherProps> = ({ switchActiveTimerType, activeTimerType }) => {

    const onClickHandler = (e: React.MouseEvent<HTMLDivElement>): void => {
        const target = e.target as typeof e.target & {
            dataset: { type: timerType };
        };

        if (target.dataset.type) {
            switchActiveTimerType(target.dataset.type);
        }
    };

    const renderItems = (labels: timerType[]): React.ReactNode[] => {
        return labels.map(label => {
            return <SwitcherItem key={label}
                                 className='focus'
                                 data-type={label}
                                 active={activeTimerType === label}
                                 width={[90, 120, 150, 200]}>{label}</SwitcherItem>;
        });
    };

    return (
        <Switcher onClick={onClickHandler}>
            {renderItems(['pomodoro', 'short break', 'long break'])}
        </Switcher>
    );
};

export default TimerSwitcher;