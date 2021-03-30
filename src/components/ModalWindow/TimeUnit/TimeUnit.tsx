import React, { Dispatch, SetStateAction } from 'react';

import { Input, InputLabel, Unit, IncreaseArrow, DecreaseArrow } from './TimeUnit.styled';
import { timerConfig } from 'timer';

import arrowUp from '../../../assets/icon-arrow-up.svg';
import arrowDown from '../../../assets/icon-arrow-down.svg';

interface TimeUnitProps {
    label: string,
    value: number,
    changeTimeConfig: Dispatch<SetStateAction<timerConfig>>
}

const TimeUnit: React.FC<TimeUnitProps> = ({ label, value, changeTimeConfig }) => {
    const inputHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const newValue = +e.currentTarget.value * 60;

        if (newValue < 100 * 60) {
            changeTimeProperty(newValue);
        }
    };

    const arrowClickHandler = (diff: number) => {
        changeTimeProperty((value + diff) * 60);
    };

    const changeTimeProperty = (newTime: number) => {
        changeTimeConfig(prevConfig => ({
            ...prevConfig,
            [label]: newTime,
        }));
    };

    return (
        <Unit display={['flex', 'block', 'block', 'block']}
              justifyContent={['space-between', '', '', '']}
              alignItems={['center', '', '', '']}
              width={[1, 0.4, 0.4, 0.4]}>
            <InputLabel width={['30%', '100%', '100%', '100%']}>{label}</InputLabel>
            <Input value={value} onInput={inputHandler} min='1' max='100' type='number'
                   width={['60%', '100%', '100%', '100%']}/>
            <IncreaseArrow onClick={() => arrowClickHandler(1)} src={arrowUp} alt='up'/>
            <DecreaseArrow onClick={() => arrowClickHandler(-1)} src={arrowDown} alt='down'/>
        </Unit>
    );
};

export default TimeUnit;