import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        terracotta: {
          DEFAULT: '#E07856',
          50:  '#FDF3EF',
          100: '#FAE3D9',
          200: '#F4C4AC',
          300: '#EEA47F',
          400: '#E88E68',
          500: '#E07856',
          600: '#D05C37',
          700: '#A8452A',
          800: '#7E321F',
          900: '#542115',
        },
        forest: {
          DEFAULT: '#264E36',
          50:  '#EBF3EE',
          100: '#C8DDD0',
          200: '#90BAA0',
          300: '#5C9571',
          400: '#3D7152',
          500: '#264E36',
          600: '#1E3E2B',
          700: '#162E1F',
          800: '#0E1E14',
          900: '#060F0A',
        },
        cream: {
          DEFAULT: '#F4EDE4',
          50:  '#FDFAF7',
          100: '#F9F4EE',
          200: '#F4EDE4',
          300: '#EAD9C6',
          400: '#DEC5A8',
          500: '#D0AF89',
        },
      },
      fontFamily: {
        display: ['Clash Display', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23264E36' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
