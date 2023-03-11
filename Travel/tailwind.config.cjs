/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      screens: {
        xs: '375px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        syne: ['syne', 'sans-serif'],
      },
      colors: {
        primary: '#FFE3D2',
        secondary: '#121212',
        accent: '#18181E',
        tertiary: '#212121',
        'blue-tint': '#3E3E59',
      },
    },
  },
  plugins: [],
};
