/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	theme: {
		extend: {
			fontFamily: {
				serif: ['"Instrument Serif"', 'serif'],
				sans: ['"Work Sans"', 'system-ui', 'sans-serif'],
			},
		},
	},
};