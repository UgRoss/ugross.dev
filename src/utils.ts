/** Detect if the user has requested the system use a light or dark color theme */
export const supportsDarkMode = (): boolean =>
  window && window.matchMedia('(prefers-color-scheme: dark)').matches;

/** Transform object into query string */
export const serialize = (data: Record<string, string>): string =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
