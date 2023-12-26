// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      ...colors,
      primary: '#0F1E79',
      secondary: '#D69F00',
    },
    extend: {
      backgroundColor: {
        primary: '#0F1E79',
        secondary: '#D69F00',
      },
      textColor: {
        primary: '#0F1E79',
        secondary: '#D69F00',
      },
      borderColor: {
        primary: '#0F1E79',
        secondary: '#D69F00',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', ...fontFamily.sans],
        poppins: ['var(--font-space-poppins)', ...fontFamily.sans],
        rajdhani: ['var(--font-space-rajdhani)', ...fontFamily.sans],
        sen: ['var(--font-space-sen)', ...fontFamily.sans],
      },
      colors: {
        primary: colors.pink,
        gray: colors.gray,
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary'),
              '&:hover': {
                color: `${theme('colors.primary')}`,
              },
              code: { color: theme('colors.primary') },
            },
            code: {
              color: theme('colors.indigo.500'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary'),
              '&:hover': {
                color: `${theme('colors.primary')}`,
              },
              code: { color: theme('colors.primary') },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
