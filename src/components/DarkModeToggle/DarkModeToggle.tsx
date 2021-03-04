import React from 'react';
import { Theme, useDarkMode } from '~/hooks/useDarkMode';
import Button from '~/components/Button';
import moonImg from './assets/moon.svg';
import sunImg from './assets/sun.svg';

interface DarkModeToggleProps {
  className?: string;
}

export const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ className }) => {
  const [theme, , toggleTheme] = useDarkMode();
  const isDarkTheme = theme === Theme.DARK;

  return (
    <Button buttonType="tint" onClick={toggleTheme} className={className}>
      {isDarkTheme && <img src={sunImg} width="18" height="18" role="presentation" alt="Sun" />}
      {!isDarkTheme && <img src={moonImg} width="17" height="17" role="presentation" alt="moon" />}
    </Button>
  );
};
