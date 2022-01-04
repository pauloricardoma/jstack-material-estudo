import React, { useState, createContext } from 'react';

// mudar o theme com ContextAPI para evitar o Prop Driling
export const ThemeContext = createContext('dark');

export function ThemeProvider(props) {
  const [theme, setTheme] = useState('dark');

  function handleToggleTheme() {
    setTheme((prevState) => (
      prevState === 'dark' ? 'light' : 'dark'
    ));
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        onToggleTheme: handleToggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
