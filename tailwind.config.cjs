/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
      boxShadow: {
        calculatorShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 188px 52px rgba(0, 0, 0, 0.01), 0px 120px 48px rgba(0, 0, 0, 0.04), 0px 68px 41px rgba(0, 0, 0, 0.15), 0px 30px 30px rgba(0, 0, 0, 0.26), 0px 8px 17px rgba(0, 0, 0, 0.29), inset 0px 6px 8px rgba(255, 255, 255, 0.1), inset 0px -4px 5px rgba(0, 0, 0, 0.22)',
        keyShadow: '0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.06)',
      },
      backgroundImage: {
        bgKeyButtonDefault: 'linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%)',
        bgKeyButtonVioletMedium: 'linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0.01%, rgba(255, 255, 255, 0.05) 100%)',
        bgKeyButtonVioletLight: 'linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
      colors: {
        violet: {
          300: '#7F45E2',
          400: '#643F9F',
          500: '#975DFA',
          600: '#462878',
        },
        white: {
          500: '#EBEBEB',
        },
      }
    },
  },
  plugins: [],
}
