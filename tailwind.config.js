/** @type {import('tailwindcss/types').Config} */
const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--p-background)',
        surface: 'var(--p-surface)',
        'surface-hovered': 'var(--p-surface-hovered)',
        'surface-neutral': 'var(--p-surface-neutral)',
        'surface-neutral-hovered': 'var(--p-surface-neutral-hovered)',
        'surface-neutral-pressed': 'var(--p-surface-neutral-pressed)',
        'surface-neutral-subdued': 'var(--p-surface-neutral-subdued)',
        divider: 'var(--p-divider)',

        muted: 'var(--color-muted)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        decorative: 'var(--color-decorative)',
        black: '#000',
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
