import React, { useState } from 'react';

interface injectedProps {
    time: string,
    timePart: number,
    pauseHandler: () => void,
    actionContent: string,
}

interface TimerState {
    isActive: boolean,
    timerId: null | NodeJS.Timeout,
}


const initialTime = 5;

const withTimer = () => (View: React.ComponentType<injectedProps>) => {
    return () => {
        const [time, setTime] = useState<number>(initialTime);
        const [timer, setTimer] = useState<TimerState>(
            {
                isActive: false,
                timerId: null,
            }
        );

        const pauseHandler = (): void => {
            if (time > 0) {
                if (timer.isActive) {
                    clearInterval(timer.timerId as NodeJS.Timeout);

                    setTimer({
                        timerId: null,
                        isActive: false,
                    });
                } else {
                    const id = initializeTimer();

                    setTimer({
                        timerId: id,
                        isActive: true,
                    });
                }
            }
        };

        const initializeTimer = (): NodeJS.Timeout => {
            const id = setInterval(() => {
                setTime(time => {
                    if (time <= 0) {
                        clearInterval(id);
                        return time;
                    }

                    return time - 1;
                });
            }, 1000);

            return id;
        };


        const formatTime = (timestamp: number): string => {
            const minutes = Math.floor(timestamp / 60),
                  seconds = timestamp % 60;

            return `${constructCorrectValue(minutes)}:${constructCorrectValue(seconds)}`;
        };

        const constructCorrectValue = (value: number): number | string => {
            return value < 10 ? `0${value}` : value;
        };

        return <View pauseHandler={pauseHandler} actionContent={timer.isActive ? 'STOP' : 'START'}
                     timePart={time * 100 / initialTime}
                     time={formatTime(time)}/>;
    };
};

export default withTimer;