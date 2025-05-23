/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{ts,tsx}', // App directory
		'./pages/**/*.{ts,tsx}', // Pages
		'./components/**/*.{ts,tsx}', // Components
		'./styles/**/*.{scss,css}', // ✅ Include SCSS styles
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
