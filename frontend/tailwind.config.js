/** @type {import('tailwindcss').Config }*/

module.exports = {
  purge: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        'content-desktop': '1107px',
      },
      colors: {
        yellow: '#fcc563',
        black: '#333333',
        white: '#ffffff',
        whiteAlpha: 'rgba(255, 255, 255, 0.4)',
        primary: '#32315b',
        primaryDark: '#313059',
        highlight: '#414073',
      },
      boxShadow: {
        'search-bar': '-1px -1px 0 1px #383762',
        'section': '-2px -1px 2px #383762',
      },
    },
  },
  variants: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto'],
      },
      scale: {
        'reverse': '-1',
      },
    },
  },
  plugins: [],
}