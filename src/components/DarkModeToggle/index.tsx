import React from 'react';
// import useDarkMode, { ThemeType } from './useDarkMode';
import Switcher from './Switcher';
import ThemeContext from '../../contexts/ThemeContext';

const DarkModeToggle = () => {
  return (
    <ThemeContext.Consumer>
      {theme => <Switcher onClick={theme.toggleTheme} toggled={theme.dark} />}
    </ThemeContext.Consumer>
  );
};

export default DarkModeToggle;
