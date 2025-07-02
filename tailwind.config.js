/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#181A20',
        electric: '#00BFFF',
        neon: '#39FF14',
        glass: 'rgba(24,26,32,0.7)',
        royalblue: '#4169E1',
        sky: '#8EC5FC',
        dark: '#121212',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        glass: '8px',
      },
      darkMode: 'class',
    },
  },
  plugins: [],
}