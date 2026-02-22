/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'slate-dark': '#1A1A1A',
        'slate-mid': '#272724',
        'slate-light': '#3D3B37',
        'teal': '#4A7C59',
        'teal-light': '#6BA37A',
        'teal-glow': 'rgba(74, 124, 89, 0.2)',
        'white': '#F2EDE4',
        'gray-300': '#C4BBB0',
        'gray-500': '#8B8578',
        'amber': '#8B9A46',
        'navy': '#1E2A3A',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'fira': ['Fira Mono', 'monospace'],
      },
      fontSize: {
        'h1': '40px',
        'h2': '28px',
        'h3': '20px',
        'body': '16px',
        'caption': '14px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'clip-reveal': 'clipReveal 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'pulse-glow': {
          '0%, 100%': { textShadow: '0 0 10px rgba(74, 124, 89, 0.3), 0 0 20px rgba(74, 124, 89, 0.1)' },
          '50%': { textShadow: '0 0 20px rgba(74, 124, 89, 0.5), 0 0 40px rgba(74, 124, 89, 0.2)' },
        },
        clipReveal: {
          '0%': { clipPath: 'inset(0 100% 0 0)', opacity: '0' },
          '1%': { opacity: '1' },
          '100%': { clipPath: 'inset(0 0 0 0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
