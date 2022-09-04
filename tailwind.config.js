/** @type {import('tailwindcss/types').Config} */
const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neural: {
          0: '#fff',
          100: '#F8F9FC',
          200: '#F1F3F9',
          300: '#E1E6EF',
          400: '#CBD2E1',
          500: '#94A0B8',
          600: '#5F6C85',
          700: '#3F444D',
          800: '#23272F',
          900: '#1B1F27',
          1000: '#0A0D14',
        },
        primary: {
          100: '#f0f5ff',
          200: '#dce7fe',
          300: '#bed3fe',
          400: '#91b5fd',
          500: '#6194fa',
          600: '#3d7bf7',
          700: '#2f6fed',
          800: '#1d5bd6',
          900: '#1e4eae',
          1000: '#1e428a',
        },
        secondary: {
          100: '#f8f5ff',
          200: '#efe7fe',
          300: '#e4d7fe',
          400: '#ccb4fd',
          500: '#af89fa',
          600: '#9e70fa',
          700: '#8b54f7',
          800: '#6d35de',
          900: '#5221b5',
          1000: '#451d95',
        },
        success: {
          100: '#EDFDF8',
          200: '#D1FAEC',
          300: '#A5F3D9',
          400: '#6EE7BF',
          500: '#36D39F',
          600: '#0EA472',
          700: '#08875D',
          800: '#04724D',
          900: '#066042',
          1000: '#064C35',
        },
        warning: {
          100: '#FFF8EB',
          200: '#FFF1D6',
          300: '#FEE2A9',
          400: '#FDCF72',
          500: '#FBBB3C',
          600: '#DB7712',
          700: '#B25E09',
          800: '#96530F',
          900: '#80460D',
          1000: '#663B0F',
        },
        error : {
          100: '#FEF1F2',
          200: '#FEE1E3',
          300: '#FEC8CD',
          400: '#FCA6AD',
          500: '#F8727D',
          600: '#EF4352',
          700: '#E02D3C',
          800: '#BA2532',
          900: '#981B25',
          1000: '#86131D',
        },
        default: 'hsla(221 28% 16% / 1)',
        secondary: 'hsla(221 28% 16% / 0.8)',
        disabled: 'hsla(221 28% 16% / 0.65)',

        'default-on-dark': 'hsla(0 0% 100% / 1)',
        'secondary-on-dark': 'hsla(0 0% 100% / .75)',
        'disabled-on-dark': 'hsla(0 0% 100% / .60)',
      },
      backgroundColor: {
        default: 'var(--color-bg-default)',
        emphasis: 'var(--color-bg-emphasis)',
        subtle: 'var(--color-bg-subtle)',
        inset: 'var(--color-bg-inset)',
        accent: 'var(--color-accent-subtle)',

        body: 'var(--color-background)',

        info: 'var(--color-info-subtle)',
        success: 'var(--color-success-subtle)',
        warning: 'var(--color-attention-subtle)',
        error: 'var(--color-danger-subtle)',

        // info: 'var(--color-info-background)',
        // success: 'var(--color-success-background)',
        // error: 'var(--color-error-background)',
        // warning: 'var(--color-warning-background)',
      },
      textColor: {
        default: 'hsla(221 28% 16% / 1)',
        secondary: 'hsla(221 28% 16% / 0.8)',
        disabled: 'hsla(221 28% 16% / 0.65)',

        'default-on-dark': 'hsla(0 0% 100% / 1)',
        'secondary-on-dark': 'hsla(0 0% 100% / .75)',
        'disabled-on-dark': 'hsla(0 0% 100% / .60)',

        default: 'var(--color-fg-default)',
        muted: 'var(--color-fg-muted)',
        subtle: 'var(--color-fg-subtle)',
        'on-emphasis': 'var(--color-fg-on-emphasis)',
        accent: 'var(--color-accent-fg)',

        subdued: 'var(--p-text-subdued)',
        text: 'var(--color-text)',
        link: 'var(--color-link)',
      },
      placeholderColor: {
        default: 'var(--color-fg-default)',
        muted: 'var(--color-fg-muted)',
      },
      borderColor: {
        default: 'var(--color-border-default)',
        muted: 'var(--color-border-muted)',
        subtle: 'var(--color-border-subtle)',

        info: 'var(--color-info-muted)',
        success: 'var(--color-success-muted)',
        warning: 'var(--color-attention-muted)',
        error: 'var(--color-danger-muted)',

        // info: 'var(--color-info)',
        // success: 'var(--color-success)',
        // error: 'var(--color-error)',
        // warning: 'var(--color-warning)',

        light: 'var(--p-color-border-light)',
      },
      divideColor: {
        default: 'var(--color-border-default)',
        muted: 'var(--color-border-muted)',
        subtle: 'var(--color-border-subtle)',
      },
      ringColor: {
        accent: 'var(--color-accent-emphasis)',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--color-fg-default)',
            '--tw-prose-headings': 'var(--color-gray-1000)',
            '--tw-prose-links': 'var(--color-accent-fg)',
            '--tw-prose-invert-links': 'var(--color-primary)',
            a: {
              border: 'var(--color-primary)',
              textDecoration: 'none',
              transition: 'all 150ms',
              '&:hover': {
                borderBottom: '2px solid',
              },
            },
            '.Alert p:only-child': {
              margin: 0,
            },
          },
        },
      },
    },
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '700px',
        lg: '750px',
        xl: '750px',
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
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@vechaiui/core'),
  ],
};

module.exports = config;
