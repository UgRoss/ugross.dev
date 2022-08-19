const colors = require('tailwindcss/colors');

const customColors = {
  primary: {
    DEFAULT: '#6246ea',
    dark: 'hsl(230deg, 100%, 67%)',
  },
  secondary: {
    DEFAULT: 'hsl(333deg, 100%, 45%)',
    dark: 'hsl(333deg, 100%, 52%)',
  },
  tertiary: {
    DEFAULT: 'hsl(255deg, 85%, 30%)',
    dark: 'hsl(53deg, 100%, 50%)',
  },
};

/** @type {import('tailwindcss/types').Config} */
const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        text: {
          DEFAULT: 'rgb(93, 93, 101)',
          dark: 'hsl(0deg, 0%, 100%)',
        },
        primary: customColors.primary,
        secondary: customColors.secondary,
        tertiary: customColors.tertiary,
        decorative: {
          DEFAULT: 'hsl(200deg, 75%, 65%)',
          dark: 'hsl(200deg, 50%, 60%)',
        },
        muted: {
          DEFAULT: 'hsla(0deg 0% 40%)',
          dark: 'rgb(179, 179, 189)', // #aaa
        },
      },
      backgroundColor: {
        body: {
          DEFAULT: '#fff',
          dark: '#1A202C', //'#181818',
        },
      },
      textColor: {},
      typography: {
        DEFAULT: {
          css: {
            p: {
              color: 'rgb(58, 58, 64)',
            },
            pre: false,
            code: false,
            'pre code': false,
            'code::before': false,
            'code::after': false,
            a: {
              color: customColors.primary.DEFAULT,
              border: customColors.primary.DEFAULT,
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
            p: {
              color: 'hsl(0deg, 0%, 100%)',
            },
            color: colors.gray[300],
            a: {
              color: customColors.primary.dark,
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
      sans: ['Inter', 'Graphik', 'sans-serif'],
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

module.exports = config;
