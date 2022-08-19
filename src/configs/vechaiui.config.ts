import type { ColorScheme } from '@vechaiui/react';
import { extendTheme, colors } from '@vechaiui/react';

const cool: ColorScheme = {
  id: 'cool',
  type: 'dark',
  colors: {
    bg: {
      base: colors.coolGray['900'],
      fill: colors.coolGray['900'],
    },
    text: {
      foreground: colors.coolGray['100'],
      muted: colors.coolGray['300'],
    },
    primary: colors.cyan,
    neutral: colors.coolGray,
  },
};

export const vechaUITheme = extendTheme({
  cursor: 'pointer',
  colorSchemes: {
    cool,
  },
});
