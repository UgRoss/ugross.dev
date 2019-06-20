import React from 'react';

const ThemeContext = React.createContext({
  dark: false,
  toggleTheme: () => {},
});

const supportsDarkMode = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches === true;

class ThemeProvider extends React.Component<{}, { dark: boolean }> {
  public state = {
    dark: false,
  };

  public componentDidMount() {
    const body = document.querySelector('body');
    // Getting dark mode value from localStorage!
    const isDark = JSON.parse(localStorage.getItem('dark'));
    if (isDark) {
      this.setState({ dark: isDark });
      body.classList.add('dark');
    } else if (isDark !== false && supportsDarkMode()) {
      body.classList.add('dark');
      this.setState({ dark: true });
    }
  }

  private toggleDark = () => {
    const body = document.querySelector('body');
    const { dark } = this.state;

    localStorage.setItem('dark', JSON.stringify(!dark));
    this.setState({ dark: !dark });
    body.classList.toggle('dark');
  };

  public render() {
    const { children } = this.props;
    const { dark } = this.state;

    return (
      <ThemeContext.Provider value={{ dark, toggleTheme: this.toggleDark }}>
        {children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContext;

export { ThemeProvider };
