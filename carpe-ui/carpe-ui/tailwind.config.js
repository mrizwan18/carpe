module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
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
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
