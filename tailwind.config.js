/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: {
        dark: '#1c1c1c',
        default: '#000',
      },
      white: {
        default: '#fff',
      },
      primary: {
        default: '#ff5403',
      },
      secondary: {
        default: '#84a1ff',
      }
    },
    extend: {},
  },
  plugins: [],
}
