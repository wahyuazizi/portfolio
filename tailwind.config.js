/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3.5s linear infinite',
      },
      colors: {
        'custom-bg': '#F3F3F4',
        'black-primary' : '#303030',
        'bg-card': '#191c29',
      },
      fontFamily: {
        'sans': ['"Montserrat", sans-serif'],
        'display': ['Rammetto One'],
        'cursive': ['"Reenie Beanie"'],
      },
    },
  },
  plugins: [],
}

