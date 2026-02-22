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
    },
  },
  plugins: [],
};
