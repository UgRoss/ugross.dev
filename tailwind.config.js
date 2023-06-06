/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border) / <alpha-value>)',
        muted: 'hsl(var(--color-text-muted) / <alpha-value>)',
        'card-foreground': 'hsl(var(--color-card-foreground) / <alpha-value>)',
        card: {
          DEFAULT: 'hsl(var(--color-card-background))',
          foreground: 'hsl(var(--color-card-foreground))',
        },
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
