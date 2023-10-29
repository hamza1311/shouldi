/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#0F0F0F',
          dark: '#F5F5F5'
        },
        secondary: {
          light: 'rgba(15, 15, 15, 0.9)',
          dark: 'rgba(245, 245, 245, 0.9)'
        },
        background: {
            light: '#F5F5F5',
            dark: '#372b2b'
        },
        ring: '#3B82F67F',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

