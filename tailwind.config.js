// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
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
        body: 'var(--color-body)',
        'btn-tint': 'var(--button-tint-background-hover)',
        'inline-code': 'var(--color-bg-inline-code)',
      },
      textColor: {
        muted: 'var(--color-text-muted)',
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
        md: '100%',
        lg: '100%',
        xl: '100%',
      },
      padding: {
        DEFAULT: '1rem',
      },
    },
    fontFamily: {
      sans: ['inter', 'Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: [
        'inter',
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'monospace',
      ],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
