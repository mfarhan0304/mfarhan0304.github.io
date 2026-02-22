/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'slate-dark': '#0F172A',
        'slate-mid': '#1E293B',
        'slate-light': '#334155',
        'teal': '#06B6D4',
        'teal-light': '#22D3EE',
        'teal-glow': 'rgba(6, 182, 212, 0.2)',
        'white': '#F8FAFC',
        'gray-300': '#CBD5E1',
        'gray-500': '#64748B',
        'amber': '#F59E0B',
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
          '0%, 100%': { textShadow: '0 0 10px rgba(6, 182, 212, 0.3), 0 0 20px rgba(6, 182, 212, 0.1)' },
          '50%': { textShadow: '0 0 20px rgba(6, 182, 212, 0.5), 0 0 40px rgba(6, 182, 212, 0.2)' },
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
