/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      backgroundColor: {
        orange: "hsl(25, 97%, 53%)",
        white: "hsl(0, 0%, 100%)",
        LightGrey: "hsl(217, 12%, 63%)",
        MediumGrey: "hsl(216, 12%, 54%)",
        GrayCute: "#272e38",
        DarkBlue: "#212832",
        VeryDarlkBlue: "hsl(216, 12%, 8%)",
      },
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },
      textColor: {
        white: "hsl(0, 0%, 100%)",
        LightGrey: "hsl(217, 12%, 63%)",
      },
    },
  },
  plugins: [],
};
