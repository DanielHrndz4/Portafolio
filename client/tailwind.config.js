const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      'Ctext': '#ecab0f',
      'Ccontorn': '#b57c00',
      'Cbackground': '#060907',
      'Cprimary': '#a2d3b1',
      'Csecondary': '#25763d',
      'Caccent': '#4edf7a',
     },
  },
  plugins: [],
});