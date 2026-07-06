/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Background tokens
        canvas: {
          primary: '#050505',
          secondary: '#0B1220',
          sidebar: '#111827',
          card: '#111827',
        },
        // Border token
        borderDark: '#1F2937',
        // Accent tokens (Strict Single Blue Accent)
        accent: {
          DEFAULT: '#3B82F6', // Primary Blue
          hover: '#60A5FA',   // Hover Blue
          light: '#93C5FD',   // Light Blue
        },
        // Text tokens
        txt: {
          primary: '#FFFFFF',
          secondary: '#C7CDD8',
          muted: '#94A3B8',
          disabled: '#64748B',
        },
      },
      borderRadius: {
        'btn': '12px',
        'card': '16px',
        'input': '10px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};