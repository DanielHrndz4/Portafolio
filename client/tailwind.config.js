const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      'Ctext': '#ecab0f',
      'Cbutton': '#140f01',
      'Ccontorn': '#b57c00',
      'Cbackground': '#020202',
      'Cprimary': '#101010',
      'Csecondary': '#59604e',
      'Caccent': '#8b9981',
      'Cunderline': '#864401',
    },
  },
  plugins: [],
});