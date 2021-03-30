import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { timerType } from 'timer';

interface baseProps {
    toggleTimer: Dispatch<SetStateAction<timerType>>,
    timerType: timerType,
    initValue: number,
}

interface injectedProps {
    time: string,
    timePart: number,
    pauseHandler: () => void,
    actionContent: string,
}

const withTimer = () => (View: React.ComponentType<injectedProps>) => {
    return ({ toggleTimer, timerType, initValue }: baseProps) => {
        const [time, setTime] = useState<number>(0);
        const [isActive, toggleActive] = useState<boolean>(false);
        const [isEndsTimer, setEndsTimer] = useState<boolean>(false);

        // on change timer type
        useEffect(() => {
            setTime(initValue);
            return () => {
                toggleActive(false);
                setEndsTimer(false);
            };
        }, [timerType]);

        // on loaded from storage
        useEffect(() => {
            setTime(initValue);
        }, [initValue]);

        // on time ends
        useEffect(() => {
            if (time <= 0 && isActive) {
                restartTimer();
            }
        }, [time, toggleTimer]);

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

        const restartTimer = (): void => {
            setTime(initValue);
            setEndsTimer(true);
            toggleActive(false);
        };

        const formatTime = (timestamp: number): string => {
            const minutes = Math.floor(timestamp / 60),
                  seconds = timestamp % 60;

            return `${constructCorrectValue(minutes)}:${constructCorrectValue(seconds)}`;
        };

        const constructCorrectValue = (value: number): number | string => {
            return value < 10 ? `0${value}` : value;
        };

        const pauseHandler = () => {
            if (isEndsTimer) {
                setEndsTimer(false);
            }

            toggleActive(isActive => !isActive);
        };

        return <View pauseHandler={pauseHandler}
                     actionContent={
                         isActive ? 'STOP' : isEndsTimer ? 'RESTART' : 'START'
                     }
                     timePart={time * 100 / initValue}
                     time={formatTime(time)}/>;
    };
};

export default withTimer;