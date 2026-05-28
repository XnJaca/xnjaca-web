/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F8F7F2',
          50: '#FBFAF7',
          100: '#F8F7F2',
          200: '#EEEBE2',
        },
        ink: {
          DEFAULT: '#0E0E0E',
          50: '#1A1A1A',
          100: '#2A2A2A',
          200: '#4A4742',
          300: '#6B6862',
          400: '#888780',
        },
        accent: {
          DEFAULT: '#E8B547',
          50: '#FCF6E5',
          100: '#F7E3A8',
          200: '#F0CB70',
          300: '#E8B547',
          400: '#C99A2E',
          500: '#8A6418',
          600: '#5C4410',
        },
        success: '#16A34A',
        successDark: '#4ADE80',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 5vw, 3.5rem)', { lineHeight: '1.04', letterSpacing: '-0.035em' }],
        'h2': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
