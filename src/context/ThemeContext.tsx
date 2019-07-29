import React from 'react';

enum Source {
  User = 'user',
  API = 'api',
}

const ThemeContext = React.createContext({
  dark: false,
  toggleTheme: () => null,
});

/** Detect if the user has requested the system use a light or dark color theme */
const supportsDarkMode = () => window.matchMedia('(prefers-color-scheme: dark)').matches === true;

class ThemeProvider extends React.Component<{}, { dark: boolean }> {
  public state = {
    dark: false,
  };

  public componentDidMount() {
    // Getting dark mode value from localStorage!
    const isDark = JSON.parse(localStorage.getItem('dark'));
    if (typeof isDark === 'boolean') {
      this.setDarkMode(isDark);
    } else if (supportsDarkMode() === true) {
      this.setDarkMode(true, Source.API);
    }
  }

  /** Set dark mode */
  private setDarkMode = (enabled: boolean, source: Source = Source.User): void => {
    this.setState({ dark: enabled });

    if (source === Source.User) {
      window.localStorage.setItem('dark', enabled.toString());
    }
    document.body.classList[enabled ? 'add' : 'remove']('dark');
  };

  /** Toggle Dark mode */
  public toggleDark = (): void => {
    const { dark } = this.state;
    this.setDarkMode(!dark);
  };

  public render() {
    const { children } = this.props;
    const { dark } = this.state;

    return <ThemeContext.Provider value={{ dark, toggleTheme: this.toggleDark }}>{children}</ThemeContext.Provider>;
  }
}

export default ThemeContext;

export { ThemeProvider };
