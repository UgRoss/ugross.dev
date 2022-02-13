// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.sky[500],
        muted: colors.slate[600],
        'muted-dark': colors.gray[400],
        // muted: 'hsla(0, 0%, 40%)',
        // 'muted-dark': 'hsla(0, 0%, 70%)',
        inlineCode: '#edf2f7',
        'inlineCode-dark': colors.gray[700],
        'link-underline': 'var(--color-link-underline)',
        'link-underline-hover': 'var(--color-link-underline-hover)',
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
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        decorative: 'var(--color-decorative)',
        'dark-body': '#25282C',
        'btn-tint': 'var(--button-tint-background-hover)',
      },
      textColor: {
        secondary: colors.yellow['500'],
        tertiary: colors.sky['900'],
        'dark-tertiary': colors.gray['50'],
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        // secondary: 'var(--color-text-secondary)',
        'btn-tint-hover': 'var(--button-tint-color-hover)',
        'btn-tint': 'var(--button-tint-color)',
      },
      transitionProperty: {
        bg: 'background, background-color',
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
