import type { Config } from 'tailwindcss' with { 'resolution-mode': 'import' };

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primaryDark:  '#1F2041',
        primaryMid:   '#4B3F72',
        accentLight:  '#E3DFFF',
        accentMute:   '#D3C0CD',
        accentGreen:  '#79AEA3',
      },
      keyframes: {
        gradient: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%':     { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 15s ease infinite',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
