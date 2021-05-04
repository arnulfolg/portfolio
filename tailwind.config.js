module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				// yellow: {
				// 	100: "#FFE15C",
				// 	200: "#FFDC42",
				// 	300: "#FFD829",
				// 	400: "#FFD30F",
				// 	500: "#F0C400",
				// },
				yellow: {
					100: "#FFE675",
					200: "#FFDC42",
					300: "#FFD729",
					400: "#FFD20E",
					500: "#EFB106",
				},
			},
		},
		fontFamily: {
			sans: ["IBM Plex Sans", "Helvetica", "sans-serif"],
			serif: ["Rubik", "serif"],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
