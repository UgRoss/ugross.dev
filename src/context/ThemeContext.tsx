import React, { useState, useEffect } from 'react';

const ThemeContext = React.createContext({
  dark: false,
  toggleTheme: (): void => {},
});

/** Detect if the user has requested the system use a light or dark color theme */
const supportsDarkMode = () => window.matchMedia('(prefers-color-scheme: dark)').matches === true;

interface IProps {
  children: React.ReactElement | React.ReactElement[] | null;
}

const ThemeProvider: React.FC<IProps> = ({ children }) => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = JSON.parse(localStorage.getItem('dark'));
    if (typeof isDark === 'boolean') {
      setDark(isDark);
    } else if (supportsDarkMode() === true) {
      setDark(true);
    }
  }, []);

  useEffect(() => {
    document.body.classList[dark ? 'add' : 'remove']('dark');
  }, [dark]);

  const toggleTheme = () => {
    window.localStorage.setItem('dark', String(!dark));
    setDark(!dark);
  };

  return <ThemeContext.Provider value={{ dark, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;

export { ThemeProvider };
