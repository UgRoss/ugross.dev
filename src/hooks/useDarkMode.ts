import React, { useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';
import { supportsDarkMode } from '~/utils';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
  LOCAL_STORAGE_KEY = 'theme',
}

export const useDarkMode = (): [Theme, React.Dispatch<React.SetStateAction<Theme>>, () => void] => {
  const [theme, setTheme] = useState(Theme.LIGHT);
  const [localStorageTheme, setLocalStorageTheme] = useLocalStorage(Theme.LOCAL_STORAGE_KEY, null);

  useEffect(() => {
    const isDark = localStorageTheme === Theme.DARK;
    const darkEnabled = localStorageTheme !== Theme.LIGHT && supportsDarkMode();

    if (isDark || darkEnabled) {
      setTheme(Theme.DARK);
    }
  }, []);

  /** Listen for changes in LS and save to state */
  useEffect(() => {
    setLocalStorageTheme(theme);
    document.body.classList[theme === Theme.DARK ? 'add' : 'remove']('dark');
  }, [theme]);

  /** Utility to simply toggle theme */
  const toggleTheme = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  return [theme, setTheme, toggleTheme];
};
