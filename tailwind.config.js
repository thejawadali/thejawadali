module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#05427a",
          DEFAULT: "#1064B1"
        },
        secondary: {
          light: '#DDE9FF',
          DEFAULT: "#8BB2F7",
          dark: "#6298f5"
        }
      },
      letterSpacing: {
        'more-wide': '8px'
      },
      zIndex: {
        n: "-10"
      },
      spacing: {
        lg: "60vh"
      },
      backgroundImage: {
        footer: "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60')"
      },
      borderRadius:{
        large: "5rem"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
