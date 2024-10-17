/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "paragraph-bg": "#2e2c2c",
        "subtitle-color": "#C9C7C3",
        "red-color": "#FF0000",
        "red-light": "#EC3E3E",
      },
    },
  },
  plugins: [],
};
