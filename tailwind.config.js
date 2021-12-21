const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      blue: "#204C82"
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
