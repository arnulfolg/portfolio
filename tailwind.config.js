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
	variants: {
		extend: {},
	},
	plugins: [],
};
