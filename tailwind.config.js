/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/Header.js',
    './components/Footer.js',
    './pages/index.js',
    './pages/about.js',
    './pages/contact.js',
    './pages/artists.js',
    './components/ContactForm.js',
    './components/ArtistsCards.js',
  ],
  darkMode: 'class',
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
        'media-black-light' : '#0D1359',
        'media-black-lighter' : '#1B26B1',
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

