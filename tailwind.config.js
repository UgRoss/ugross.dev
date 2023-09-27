/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
      screens: {
        lg: '650px',
        md: '650px',
        sm: '100%',
        xl: '650px',
      },
    },
    extend: {
      backgroundColor: {
        body: 'hsl(var(--body-background))',
        'inline-code': 'var(--color-inline-code-background)',
      },
      colors: {
        accent: {
          DEFAULT: 'hsl(var(--color-accent))',
          foreground: 'hsl(var(--color-accent-foreground))',
        },
        border: 'hsl(var(--color-border))',
        callout: {
          DEFAULT: 'hsl(var(--color-callout-background))',
        },
        card: {
          DEFAULT: 'hsl(var(--color-card-background))',
          foreground: 'hsl(var(--color-card-foreground))',
        },
        'card-foreground': 'hsl(var(--color-card-foreground) / <alpha-value>)',
        heading: 'var(--color-heading)',
        muted: 'hsl(var(--color-text-muted) / <alpha-value>)',
        popover: {
          DEFAULT: 'hsl(var(--color-popover-background))',
          foreground: 'hsl(var(--color-popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--color-primary))',
        },
        text: 'var(--color-text)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: false,
            'code::after': false,
            'code::before': false,
            pre: false,
            'pre code': false,
          },
        },
        page: {
          css: {
            '--tw-prose-body': theme('colors.text'),
            '--tw-prose-headings': theme('colors.heading'),
            '--tw-prose-invert-body': theme('colors.text'),
            '--tw-prose-invert-headings': theme('colors.heading'),
          },
        },
      }),
    },
  },
};
