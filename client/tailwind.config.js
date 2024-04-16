/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark_mode': '#151515',
        'light_content': '#A7A7A7',
        'solid_content': '#CCCCCC',
        'dark_card': '#363636',
        'green_dev': "#0ca34d"
      },
      width: {
        '70': '70%',
        '80': '80%',
        '85': '85%',
      },
      fontFamily: {
        'binline': 'BourtonInline',
        'bline': 'BourtonLine',
        'bbold': 'BourtonLineBold',
        'blinemedium': 'BourtonLineMedium',
        'bmarquee': 'BourtonMarquee',
        'raleway': 'raleway',
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      }
    },
  },
  plugins: [],
}

