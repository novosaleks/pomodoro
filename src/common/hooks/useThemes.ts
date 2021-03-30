import { useEffect, useMemo, useState } from 'react';

import { StorageService } from '../services';

import themes from '../../app/themes';
import { theme, themeProps } from 'themes';

const useThemes = () => {
    const themeStorage = useMemo(() => new StorageService('default-theme'), []);

    const initialTheme: theme = {
        font: themes.font[0],
        primaryColor: themes.primaryColor[0],
    };

    const [theme, setTheme] = useState<theme>(initialTheme);

    const switchThemeValue = (propName: themeProps, newPropNumber: number): void => {
        setTheme(prevTheme => {
            return {
                ...prevTheme,
                [propName]: themes[propName][newPropNumber]
            };
        });
    };

    useEffect(() => {
        const localTheme = themeStorage.getData();

        if (localTheme) {
            setTheme(JSON.parse(localTheme));
        }
    }, [themeStorage]);

    useEffect(() => {
        themeStorage.setData(JSON.stringify(theme));
    }, [theme, themeStorage]);

    return { theme, switchThemeValue };
};

export default useThemes;