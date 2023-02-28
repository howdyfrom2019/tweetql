/** @type {import('tailwindcss').Config }*/

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        'content-desktop': '1107px',
      },
      letterSpacing: {
        'label': '0.3rem',
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
      colors: {
        yellow: '#fcc563',
        black: '#333333',
        white: '#ffffff',
        whiteAlpha: 'rgba(255, 255, 255, 0.4)',
        primary: '#32315b',
        primaryDark: '#313059',
        section: '#35345e',
        label: '#6d6ca3',
        highlight: '#414073',
        lolYellow: '#a0946e',
        lolGreen: '#495a5a',
        banBlue: 'rgba(255, 227, 224, 0.6)',
        banRed: 'rgba(37, 99, 235, 0.6)',
      },
      boxShadow: {
        'search-bar': '-1px -1px 0 1px #383762',
        'section': '-2px -1px 2px #383762',
      },
      animation: {
        'open-close': 'openClose ease-out 0.14s both',
        'sound': 'soundScale 1.5s infinite ease',
        'ban-select': 'banSelect 2s infinite ease',
      },
      keyframes: {
        openClose: {
          from: { transform: 'translateY(-5px) rotate(0)' },
          to: { transform: 'translateY(-13px) rotate(180deg)' }
        },
        soundScale: {
          '0% 100%': { transform: 'scaleY(2)' },
          '50%': { transform: 'scaleY(15)' },
        },
        banSelect: {
          '0%': { 'background-position': '0% 0%' },
          '50%': { 'background-position': '91% 100%' },
          '100%': { 'background-position': '0% 0%' },
        }
      }
    },
  },
  variants: {
    animationDelay: ['responsive', 'hover'],
    extend: {
      fontFamily: {
        'roboto': ['Roboto'],
      },
      scale: {
        'reverse': '-1',
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
