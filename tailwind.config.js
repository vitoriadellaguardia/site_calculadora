/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-button': 'linear-gradient(135deg, rgba(103, 126, 234, 0.3), rgba(118, 75, 162, 0.3))',
        'gradient-clear': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'gradient-delete': 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)',
        'gradient-equal': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}