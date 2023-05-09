/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        avatarEnter: {
          '0%': { width: 0, opacity: 0 },
          '50%': { width: '32px', opacity: 0 },
          '100%': { opacity: 1 },
        },
        avatarExit: {
          '0%': { width: '32px', opacity: 1 },
          '50%': { opacity: 0, width: '32px' },
          '100%': { width: 0 },
        },
      },
      /*
      "[data-theme=night]": {
          "color-scheme": "dark",
          "primary": "#38bdf8",
          "secondary": "#818CF8",
          "accent": "#F471B5",
          "neutral": "#1E293B",
          "neutral-focus": "#273449",
          "base-100": "#0F172A",
          "info": "#0CA5E9",
          "success": "#2DD4BF",
          "warning": "#F4BF50",
          "error": "#FB7085",
        },

        [data-theme=light]": {
            "color-scheme": "light",
            primary: "#570df8",
            "primary-content": "#ffffff",
            secondary: "#f000b8",
            "secondary-content": "#ffffff",
            accent: "#37cdbe",
            "accent-content": "#163835",
            neutral: "#3d4451",
            "neutral-content": "#ffffff",
            "base-100": "#ffffff",
            "base-200": "#F2F2F2",
            "base-300": "#E5E6E6",
            "base-content": "#1f2937",
          },
       */
      colors: {
        base: {
          100: '#fff',
          '100-dark': '#0F172A',
          200: '#F2F2F2',
          '200-dark': '#0e1526',
          300: '#E5E6E6',
          '300-dark': '#0c1322',
          content: '#1f2937',
          'content-dark': '#b4c6ef',
        },
      },
    },
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '620px',
        lg: '620px',
        xl: '620px',
      },
      padding: {
        DEFAULT: '1rem',
      },
    },
    fontFamily: {
      pacifico: ['Pacifico', 'cursive'],
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    keyframes: {
      'accordion-down': {
        from: { height: 0 },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: 0 },
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
      'avatar-enter': 'avatarEnter 1s ease',
      'avatar-exit': 'avatarExit 1s ease',
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
