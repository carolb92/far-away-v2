/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			brown: "#5a3e2b",
			"light-orange": "#f4a226",
			"dark-orange": "#e5771f",
			"light-yellow": "#ffebb3",
			teal: "#76c7ad",
		},
		extend: {
			fontFamily: {
				quicksand: ["Quicksand", "sans-serif"],
				monoton: ["Monoton", "sans-serif"],
			},
		},
	},

	plugins: [],
};
