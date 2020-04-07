import React from 'react';
import classNames from 'classnames';
import { useDarkMode, Theme } from '~/hooks/useDarkMode';
import sunImg from './assets/sun.svg';
import moonImg from './assets/moon.svg';

export const DarkModeToggle = () => {
  const [theme, , toggleTheme] = useDarkMode();
  const isDarkTheme = theme === Theme.DARK;
  const toggleClassName = classNames('DarkModeToggle', { 'DarkModeToggle--toggled': isDarkTheme });

  return (
    <div
      className={toggleClassName}
      onClick={toggleTheme}
      onKeyDown={toggleTheme}
      role="button"
      aria-pressed={isDarkTheme}
      tabIndex={-4}
    >
      <img src={moonImg} width="17" height="17" role="presentation" alt="moon" />
      <img src={sunImg} width="18" height="18" role="presentation" alt="Sun" />
      <div className="clip">
        <div className="dark-mode" />
      </div>
    </div>
  );
};
