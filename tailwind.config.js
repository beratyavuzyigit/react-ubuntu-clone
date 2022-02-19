const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html',],
  darkMode: "class",
  theme: {
    colors: {
      'primaryBg': '#810831',
      'primaryColor': '#ffffff',
      'borderColor': '#f5f5f5',
      'gray-light': '#d3dce6',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      slate: colors.slate,
    },
    animation: {
      'spin-slow': 'spin 3s linear infinite',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    backgroundImage: {
      'default_wallpaper': "url('/src/assets/images/default_wallpaper.jpg')",
    },
    fontFamily: {
      'ubuntu': 'Ubuntu',
    }
  },
  plugins: [],
}
