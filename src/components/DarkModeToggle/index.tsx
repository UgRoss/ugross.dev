import React from 'react';
import Switcher from './Switcher';
import ThemeContext from '~/context/ThemeContext';

const DarkModeToggle = () => {
  return (
    <ThemeContext.Consumer>
      {theme => <Switcher onClick={theme.toggleTheme} toggled={theme.dark} />}
    </ThemeContext.Consumer>
  );
};

export default DarkModeToggle;
