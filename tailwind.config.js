/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#11235A',
        'custom-lighterblue': '#596FB7',
        'custom-greenyellow':'#C6CF9B',
        'custom-yellow':'#F6ECA9',
      },
      fontFamily: {
        'sf-mono': ['SF Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}