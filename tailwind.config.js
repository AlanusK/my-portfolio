/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: {
        darker: '#2f2f2f',
        dark: '#1c1c1c',
        default: '#000',
      },
      white: {
        dark: '#8a94a6;',
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
