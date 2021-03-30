import { useState, useEffect, useMemo } from 'react';
import { timerConfig } from 'timer';
import { StorageService } from '../services';

const useTimerConfig = () => {
    const timerStorage = useMemo(() => new StorageService('timer-config'), []);

    const initConfig: timerConfig = {
        'pomodoro': 25 * 60,
        'short break': 5 * 60,
        'long break': 15 * 60,
    };

    const [timerConfig, setTimerConfig] = useState<timerConfig>(initConfig);

    const changeTimerConfig = (newConfig: timerConfig): void => {
        setTimerConfig(newConfig);
    };

    useEffect(() => {
        const localConfig = timerStorage.getData();

        if (localConfig) {
            setTimerConfig(JSON.parse(localConfig));
        }
    }, [timerStorage]);

    useEffect(() => {
        timerStorage.setData(JSON.stringify(timerConfig));
    }, [timerConfig, timerStorage]);

    return { timerConfig, changeTimerConfig };
};

export default useTimerConfig;