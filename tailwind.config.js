/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fef9e7',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          DEFAULT: '#d4af37',
          light: '#f4d03f',
          dark: '#b8941f',
        },
        dark: {
          DEFAULT: '#000000',
          50: '#0a0a0a',
          100: '#141414',
          200: '#1a1a1a',
          300: '#2a2a2a',
        },
        textSecondary: '#e5e5e5',
        textMuted: '#a0a0a0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

