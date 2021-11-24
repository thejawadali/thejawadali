module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      letterSpacing:{
        'more-wide': '8px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
