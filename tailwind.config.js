/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        heading: 'var(--color-heading)',
        text: 'var(--color-text)',
        border: 'hsl(var(--color-border))',
        muted: 'hsl(var(--color-text-muted) / <alpha-value>)',
        'card-foreground': 'hsl(var(--color-card-foreground) / <alpha-value>)',
        card: {
          DEFAULT: 'hsl(var(--color-card-background))',
          foreground: 'hsl(var(--color-card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--color-popover-background))',
          foreground: 'hsl(var(--color-popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--color-primary))',
        },
        accent: {
          DEFAULT: 'hsl(var(--color-accent))',
          foreground: 'hsl(var(--color-accent-foreground))',
        },
      },
      typography: (theme) => ({
        page: {
          css: {
            '--tw-prose-headings': theme('colors.heading'),
            '--tw-prose-body': theme('colors.text'),
            '--tw-prose-invert-body': theme('colors.text'),
            '--tw-prose-invert-headings': theme('colors.heading'),
          },
        },
        DEFAULT: {
          css: {
            pre: false,
            code: false,
            'pre code': false,
            'code::before': false,
            'code::after': false,
          },
        },
      }),
      backgroundColor: {
        body: 'hsl(var(--body-background))',
        'inline-code': 'var(--color-inline-code-background)',
      },
    },
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '600px',
        lg: '600px',
        xl: '600px',
      },
      padding: {
        DEFAULT: '1rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
