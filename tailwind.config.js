const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      blue: "#204C82"
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h2: {
              "margin-bottom": "0.6666666666666666em"
            }
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
