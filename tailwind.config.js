/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {},
    fontFamily: {
      'workSans': ['"Work Sans", sans-serif;']
    },
    colors: {
      'white': 'hsl(0, 0%, 100%)',
      'pink': 'hsl(275, 100%, 97%)',
      'gray-purple': 'hsl(292, 16%, 49%)',
      'dark-purple': 'hsl(292, 42%, 14%)'
    },
    backgroundImage: {
     'bgdesktop': "url('/assets/images/background-pattern-desktop.svg')",
     'bgmobile': "url('/assets/images/background-pattern-mobile.svg')",
     'plus': "url('/assets/images/icon-plus.svg')",
     'minus': "url('/assets/images/icon-minus.svg')"
    }
  },
  plugins: [],
}

