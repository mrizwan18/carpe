/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440",
    },
    extend: {
      colors: {
        primaryOrange: {
          light: "#FB8F67",
          dark: "#DE6944",
        },
        primaryBlue: {
          light: "#264655",
          dark: "#26495C",
        },

        primaryRed: {
          light: "#FF0000",
          dark: "#92140C",
        },
        primaryGreen: {
          light: "#EC5552",
          dark: "#60992D",
        },
        primaryBg: "#3C3C3C",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-primary(Orange|Red|Blue)/, //to be done when using custom colors and dynamic inclusion of colors in app
    },
  ],
};
