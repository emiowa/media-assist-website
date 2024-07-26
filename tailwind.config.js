/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/Header.js',
    './components/Footer.js',
    './pages/index.js',
    './pages/about/about-us.js',
    './pages/contact.js',
    './components/ContactForm.js',
  ],
  theme: {
    extend: {
      colors: {
        'media-black': '#0A0E42',
        'media-white': '#EEEFF1',
        'media-grey': '#61626B',
        'media-lightpurple': '#E3E5FD',
        'media-mediumpurple': '#6F78DE',
        'media-darkpurple': '#4856F0',
        'media-red': '#E62E2F',
        'media-orange': '#E6642E',
        'media-yellow': '#F0CC48',
      },
      fontFamily: {
        sans: ['ZenMaruGothic', 'sans-serif'],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
        black: 900,
      },
      borderRadius: {
        'bglg': '50px',
      }
    },
  },
  plugins: [],
}

