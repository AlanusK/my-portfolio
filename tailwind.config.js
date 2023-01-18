/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      transparent: 'transparent',
      black: {
        darker: '#2f2f2f',
        dark: '#1c1c1c',
        default: '#000',
      },
      white: {
        dark: '#9e9e9e',
        default: '#fff',
      },
      primary: { 
        default: '#ff5403',
      },
      secondary: {
        dark: '#486074',
        default: '#84a1ff',
      }
    },
    extend: {},
  },
  plugins: [],
}
