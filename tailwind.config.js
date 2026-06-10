/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        dark: {
          base: '#0a0f1e',
          card: '#0F172A',
          terminal: '#060B14',
          border: '#1E293B',
        },
        accent: {
          blue: '#3B82F6',
          cyan: '#22D3EE',
          pink: '#EC4899',
          purple: '#8B5CF6',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#CBD5E1',
          muted: '#94A3B8',
          darker: '#64748B',
        }
      },
      animation: {
        'pulse-glow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-1': 'float 3s ease-in-out infinite',
        'float-2': 'float 3.5s ease-in-out infinite 0.5s',
        'float-3': 'float 4s ease-in-out infinite 1s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
