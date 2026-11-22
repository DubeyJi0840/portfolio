/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#ff5500', // Bold International Orange
          hover: '#e04c00',
          subtle: 'rgba(255, 85, 0, 0.12)',
          border: 'rgba(255, 85, 0, 0.25)',
          glow: 'rgba(255, 85, 0, 0.35)',
        },
        surface: {
          DEFAULT: '#0f0f11',
          card: '#141416',
          raised: '#1c1c1f',
          border: '#27272a',
          hover: '#1e1e24',
        }
      },
      fontFamily: {
        sans: ['Geist', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
