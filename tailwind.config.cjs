/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
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
	},
	plugins: [],
}
