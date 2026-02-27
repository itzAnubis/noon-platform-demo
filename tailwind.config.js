/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        arabic: ['Cairo', 'sans-serif'],
      },
      colors: {
        primary: '#C2185B',
        secondary: '#D4AF37',
        accent: '#D4AF37',
      },
    },
  },
  plugins: [],
};
