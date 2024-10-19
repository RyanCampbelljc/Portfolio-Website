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
        "gradient-one": "#252424",
        "gradient-two": "#423E3E",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideInFromLeft: {
          "0%": { transform: "translateX(-50vw)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInFromRight: {
          "0%": { transform: "translateX(50vw)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out forwards",
        slideInFromLeft: "slideInFromLeft 1.5s ease-out forwards",
        slideInFromRight: "slideInFromRight 1.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
// duration | easing-function | delay | iteration-count | direction | fill-mode | play-state | name
//duration | easing-function | delay | name
