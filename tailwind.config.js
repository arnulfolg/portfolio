/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				yellow: {
					100: "#FFEFA8",
					200: "#FFE675",
					300: "#FFDC42",
					400: "#FFD20E",
					500: "#D18100",
				},
				gray: {
					900: "#191919",
				},
			},
		},
		fontFamily: {
			ibm: ["IBM Plex Sans", "Helvetica", "sans-serif"],
			rubik: ["Rubik", "serif"],
		},
	},
	plugins: [],
};
