/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        arabic: ['Cairo', 'sans-serif'],
      },
      colors: {
        primary: '#7b2145',
        secondary: '#c3a248',
        accent: '#6e0d34',
      },
    },
  },
  plugins: [],
};
