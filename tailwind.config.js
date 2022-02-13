const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/_includes/**/*.njk", "./src/*.{html,njk}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
