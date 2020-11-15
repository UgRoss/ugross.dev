import React, { useEffect } from 'react';
import { useLocalStorage } from 'react-use';
import { supportsDarkMode } from '~/utils';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

enum ThemeLocalStorageKey {
  LIGHT = 'theme:light',
  DARK = 'theme:dark',
}

export const useDarkMode = (): [Theme, React.Dispatch<React.SetStateAction<Theme>>, () => void] => {
  const isSystemAppearanceDark = supportsDarkMode();
  const initialTheme: Theme = isSystemAppearanceDark ? Theme.DARK : Theme.LIGHT;

  const [activeTheme = initialTheme, setActiveTheme] = useLocalStorage<Theme>(
    isSystemAppearanceDark ? ThemeLocalStorageKey.DARK : ThemeLocalStorageKey.LIGHT,
    initialTheme
  );

  /** Listen for changes in LS and save to state */
  useEffect(() => {
    document.body.classList[activeTheme === Theme.DARK ? 'add' : 'remove']('dark');
  }, [activeTheme]);

  /** Utility to simply toggle theme */
  const toggleTheme = () => setActiveTheme(activeTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);

  return [activeTheme, setActiveTheme, toggleTheme];
};
