module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#1064B1",
        secondary: "#8BB2F7"
      },
      letterSpacing:{
        'more-wide': '8px'
      },
      zIndex: {
        n: "-10"
      },
      spacing: {
        lg: "75vh"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
