/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      Primary: "#a5d4d0",
      black: "#000000",
      blue: "#2a6a75",
      "blue-light": "#4299e1",
      "blue-light2": "#a5d4d0",
      "blue-prime": "#1fb7c4",
      "blue-dark": "#081375",
      purple: "#7e5bef",
      white: "#FFFFFF",
      red: "#eb424a",
      gray: "#b3b5b5",
      "gray-dark": "#7d8282",
      "grey-light": "rgba(46,52,56,0.1)",
      disable: "#DDDDDD",
      loaderBg: "rgb(209 213 219)",
      loader: "rgb(37 99 235)",
      amber: "#ffbf00",
    },
    extend: {
      spacing: {
        100: "20rem",
        128: "25rem",
        144: "36rem",
      },
    },
  },
  plugins: [],
};
