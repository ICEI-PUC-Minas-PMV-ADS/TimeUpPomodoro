import React, { createContext, useContext, useEffect, useState } from 'react';
import { lightColors, darkColors } from './colors';
import { useColorScheme } from 'react-native';

export const ThemeContext = createContext({
    dark: false,
    colors: lightColors,
    setScheme: () => {},
});

export const ThemeProvider = props => {
    const colorScheme = useColorScheme() === 'dark';
    const [isDark, setIsDark] = useState(colorScheme == 'dark');
    useEffect(() => {
        setIsDark(colorScheme == 'dark');
    }, [colorScheme]);

    const LightTheme = {
        dark: isDark,
        colors: isDark ? darkColors : lightColors,
        setScheme: scheme => setIsDark(scheme === 'dark'),
    };

    return (
        <ThemeContext.Provider value = {LightTheme}>
            {props.children}
        </ThemeContext.Provider>
    );
};

//hook para acessar todos os values

export const useTheme = () => useContext(ThemeContext);

