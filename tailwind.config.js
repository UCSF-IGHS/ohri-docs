const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./components/**/*.tsx",
    "./pages/**/*.md",
    "./pages/**/*.mdx",
    "./theme.config.js",
    "./styles.css",
  ],
  colors: {
    dark: "#000",
    gray: colors.neutral,
    blue: colors.blue,
    orange: colors.orange,
    green: colors.green,
    red: colors.red,
    yellow: colors.yellow,
  },
  darkMode: "class",
};
