/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary colors
        navy: '#1B2A3A',        // Deep navy blue
        charcoal: '#2C2C2C',    // Charcoal black
        forest: '#2D5016',      // Dark forest green
        olive: '#6B7C32',       // Olive green
        
        // Neutral colors
        taupe: '#B8A99A',       // Warm taupe
        ash: '#8B8B8B',         // Light grey/ash
        cream: '#F5F5DC',       // Off-white cream
        white: '#FFFFFF',       // Pure white
        
        // Text colors
        ink: '#1B2A3A',         // Navy for primary text
        fog: '#6B7C32',         // Olive for secondary text
        mist: '#8B8B8B',        // Ash for muted text
        
        // Background colors
        cloud: '#F5F5DC',       // Cream background
        blush: '#F8F6F0',       // Light cream
        sage: '#2D5016',        // Forest green accent
        sand: '#B8A99A',        // Taupe for subtle backgrounds
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
      }
    },
  },
  plugins: [],
};