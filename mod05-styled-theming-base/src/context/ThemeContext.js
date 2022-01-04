import React, { useState, createContext, useMemo, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import themes from '../styles/themes';

export const ThemeContext = createContext();


export default function ThemeContextProvider(props) {
  const [theme, setTheme] = useState(initalLocalTheme());

  function initalLocalTheme() {
    let theme = 'dark';
    try {
      theme = JSON.parse(localStorage.getItem('theme'));
    } catch (err) {
      console.log(err);
    }
    return theme;
  }

  const currentTheme = useMemo(() => {
    // quando numa situação de uso de valor dinâmico, usar os colchetes em vez
    // de themes.theme -> themes[theme]
    return themes[theme] || themes.dark;
  }, [theme]);


  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        onToggleTheme: handleToggleTheme,
      }}
    >
      <ThemeProvider theme={currentTheme}>
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
