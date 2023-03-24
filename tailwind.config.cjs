/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'numbers': ['Train One', 'cursive'],
      },
      colors: {
        'ui-sand': '#F5E9CF',
        'ui-purple': '#4D455D',
        'ui-red': '#E96479',
        'ui-green': '#7DB9B6',
        'ui-gray': '#3D3C42',
        'ui-black': '#1A120B',
        'ui-white': '#FEFBF6',
      },
    },
  },
  plugins: [],
}

// Main palette: https://colorhunt.co/palette/4d455de96479f5e9cf7db9b6
// black: https://colorhunt.co/palette/1a120b3c2a21d5cea3e5e5cb
// gray / white: https://colorhunt.co/palette/fefbf6a6d1e67f52833d3c42
