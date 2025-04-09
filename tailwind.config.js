/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F172A',    // Deep navy for primary text
        fog: '#64748B',    // Slate for secondary text
        blush: '#F1F5F9',  // Light slate for backgrounds
        cloud: '#FFFFFF',  // Pure white
        rose: '#2563EB',   // Royal blue for primary accent
        sage: '#0EA5E9',   // Sky blue for secondary accent
        sand: '#F8FAFC',   // Lightest slate for subtle backgrounds
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
      spacing: {
        '8': '8px',
        '16': '16px',
        '1100': '1100px',
      },
      animation: {
        'sakura': 'sakuraFall 4s linear forwards',
      },
      keyframes: {
        sakuraFall: {
          '0%': { transform: 'translateY(-10vh) translateX(0) rotate(0deg)', opacity: 1 },
          '100%': { transform: 'translateY(100vh) translateX(-100vw) rotate(360deg)', opacity: 0 },
        }
      }
    },
  },
  plugins: [],
};