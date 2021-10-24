import React from 'react';
import { Theme, useDarkMode } from '~/hooks/useDarkMode';
import classNames from 'classnames';
import IconMoon from '~/components/IconMoon';
import IconSun from '~/components/IconSun';

interface DarkModeToggleProps {
  className?: string;
}

export const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ className }) => {
  const [theme, , toggleTheme] = useDarkMode();
  const isDarkTheme = theme === Theme.DARK;
  const buttonClassName = classNames(
    className,
    `text-gray-800 rounded-md select-none font-medium`,
    `px-2 py-2 mr-2`,
    `transition duration-500 ease`,
    `hover:bg-gray-200 focus:outline-none focus:shadow-outline`
  );

  return (
    <button onClick={toggleTheme} className={buttonClassName} aria-label="Change Theme">
      {isDarkTheme && <IconSun />}
      {!isDarkTheme && <IconMoon />}
    </button>
  );
};
