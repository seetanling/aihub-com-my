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
        navy: {
          deep:     '#060E1C',
          mid:      '#0C1C35',
          card:     '#112040',
          elevated: '#162A50',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light:   '#E2CA7D',
          dark:    '#B8902A',
        },
        silver: {
          DEFAULT: '#8DA4BE',
          light:   '#B8CCE0',
        },
      },
      fontFamily: {
        display: ['Clash Display', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 0 12px rgba(201,168,76,0.20)',
        'gold-md': '0 0 28px rgba(201,168,76,0.30)',
        'card':    '0 2px 20px rgba(0,0,0,0.40)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in':    'fadeIn 0.5s ease-in-out',
        'slide-up':   'slideUp 0.4s ease-out',
        'float':      'float 6s ease-in-out infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
