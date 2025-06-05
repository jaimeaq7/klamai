/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2463',
          light: '#1A3473',
          dark: '#051a4a',
        },
        secondary: {
          DEFAULT: '#3E4A61',
          light: '#4E5A71',
          dark: '#2E3A51',
        },
        accent: {
          DEFAULT: '#E6AF2E',
          light: '#F6BF3E',
          dark: '#D69F1E',
        },
        success: {
          DEFAULT: '#10B981',
          light: '#20C991',
          dark: '#00A971',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dark: '#D97706',
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#F87171',
          dark: '#DC2626',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(10, 36, 99, 0.85), rgba(10, 36, 99, 0.85)), url('https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        'about-pattern': "linear-gradient(rgba(10, 36, 99, 0.90), rgba(10, 36, 99, 0.90)), url('https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
    },
  },
  plugins: [],
};