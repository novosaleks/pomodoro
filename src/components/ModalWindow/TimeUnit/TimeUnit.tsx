import React, { Dispatch, SetStateAction } from 'react';

import { Input, InputLabel, Unit } from './TimeUnit.styled';
import { timerConfig } from 'timer';

interface TimeUnitProps {
    label: string,
    value: number,
    changeTimeConfig: Dispatch<SetStateAction<timerConfig>>
}

const TimeUnit: React.FC<TimeUnitProps> = ({ label, value, changeTimeConfig }) => {
    const inputHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const newValue = +e.currentTarget.value * 60;

        changeTimeConfig(prevConfig => ({
            ...prevConfig,
            [label]: newValue,
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
        </Unit>
    );
};

export default TimeUnit;