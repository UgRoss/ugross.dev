/** Detect if the user has requested the system use a light or dark color theme */
export const supportsDarkMode = (): boolean =>
  window && window.matchMedia('(prefers-color-scheme: dark)').matches === true;
