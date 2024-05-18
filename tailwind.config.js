/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "#2bd0d0",
        darkViolet: "#4b3f6b",
        red: "#f46363",
        gray: "#eff1f7",
        grayishViolet: "#9e9aa8",
        veryDarkBlue: "#3a3054",
        veryDarkViolet: "#3a3054",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
