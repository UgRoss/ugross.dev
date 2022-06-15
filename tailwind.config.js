const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        muted: {
          DEFAULT: 'hsla(0deg 0% 40%)',
          dark: '#AAAAAA',
        },
        link: {
          DEFAULT: '#805AD5',
          dark: '#9daaf2',
        },
        secondary: {
          DEFAULT: '#ffb703',
          dark: '#ffb703',
        },
        tertiary: {
          DEFAULT: colors.sky[900],
          dark: colors.sky[50],
        },
        primary: colors.sky[500],
      },
      backgroundColor: {
        body: {
          DEFAULT: '#fff',
          dark: '#181818',
        },
      },
      textColor: {},
      typography: {
        DEFAULT: {
          css: {
            pre: false,
            code: false,
            'pre code': false,
            'code::before': false,
            'code::after': false,
            a: {
              color: colors.indigo[500],
              border: colors.indigo[500],
              textDecoration: 'none',
              transition: 'all 200ms',
              '&:hover': {
                borderBottom: '2px solid',
              },
            },
            h5: {
              fontWeight: 'bold',
              marginBottom: '0.5rem',
            },
          },
        },
        dark: {
          css: {
            color: colors.gray[500],
            a: {
              color: colors.blue[100],
              '&:hover': {
                color: colors.blue[100],
              },
            },
          },
        },
      },
      transitionProperty: {
        bg: 'background, background-color',
      },
      scale: {
        1025: '1.025',
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
      mono: [
        'ui-monospace',
        'Jetbrains Mono',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'monospace',
      ],
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
