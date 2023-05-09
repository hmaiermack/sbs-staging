/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      chic: ["Chic", "sans-serif"],
      ["monet-bold"]: ["Monet-Bold", "sans-serif"],
      ["monet-light"]: ["Monet-Light", "sans-serif"],
      ["monet-regular"]: ["Monet-Regular", "sans-serif"],
      ["yadon-regular"]: ["Yadon-Regular", "sans-serif"],
      ["yadon-bold"]: ["Yadon-Bold", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
