import React, { useEffect, useState } from 'react';

interface baseProps {
    togglePomodoro: () => void,
    timerType: string,
}

interface injectedProps {
    time: string,
    timePart: number,
    pauseHandler: () => void,
    actionContent: string,
}

interface ITimeConfig {
    [value: string]: number,
}

const timeConfig: ITimeConfig = {
    'pomodoro': 5,
    'short break': 15,
    'long break': 20,
};

const withTimer = () => (View: React.ComponentType<injectedProps>) => {
    return ({ togglePomodoro, timerType }: baseProps) => {
        const [time, setTime] = useState<number>(0);
        const [isActive, toggleActive] = useState<boolean>(false);

        // on change timer type
        useEffect(() => {
            setTime(timeConfig[timerType]);
            return () => toggleActive(false);
        }, [timerType]);

        // on time ends
        useEffect(() => {
            if (time <= 0) {
                togglePomodoro();
            }
        }, [time, togglePomodoro]);

        // on pause/resume
        useEffect(() => {
            if (isActive) {
                const id = setInterval(() => {
                    setTime(time => {
                        if (time <= 0) {
                            clearInterval(id);
                            return 0;
                        }

                        return time - 1;
                    });
                }, 1000);

                return () => clearInterval(id);
            }
        }, [isActive]);

        const formatTime = (timestamp: number): string => {
            const minutes = Math.floor(timestamp / 60),
                  seconds = timestamp % 60;

            return `${constructCorrectValue(minutes)}:${constructCorrectValue(seconds)}`;
        };

        const constructCorrectValue = (value: number): number | string => {
            return value < 10 ? `0${value}` : value;
        };

        return <View pauseHandler={() => toggleActive(isActive => !isActive)}
                     actionContent={isActive ? 'STOP' : 'START'}
                     timePart={time * 100 / timeConfig[timerType]}
                     time={formatTime(time)}/>;
    };
};

export default withTimer;