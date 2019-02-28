/** Capitalize string */
export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

/**
 * Format reading time based on minutes and add cups emoji ☕️
 * @param minutes - estimate minutes of an article reading time
 */
export const formatReadingTime = (minutes: number): string => {
  const cups: number = Math.round(minutes / 5);
  return `${new Array(cups || 1).fill('☕️').join('')} ${minutes} min read`;
};
