// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        muted: 'hsla(0, 0%, 40%)',
        'muted-dark': 'hsla(0, 0%, 70%)',
        inlineCode: '#edf2f7',
        'inlineCode-dark': 'black',
      },
      typography: {
        dark: {
          css: {
            color: colors.gray[100],
            a: {
              color: colors.blue[100],
              '&:hover': {
                color: colors.blue[100],
              },
            },
          },
        },
        DEFAULT: {
          css: {
            pre: false,
            code: false,
            'pre code': false,
            'code::before': false,
            'code::after': false,
            a: {
              textDecoration: 'none',
            },
            h5: {
              fontWeight: 'bold',
              marginBottom: '0.5rem',
            },
          },
        },
      },
      textColor: {
        secondary: colors.yellow['500'],
        tertiary: colors.gray['800'],
      },
    },
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '700px',
        lg: '700px',
        xl: '700px',
      },
      padding: {
        DEFAULT: '1rem',
      },
    },
    fontFamily: {
      sans: ['inter', 'Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
