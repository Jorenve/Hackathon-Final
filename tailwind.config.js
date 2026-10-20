/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kbc: {
          blue: '#003366',       // KBC Signature Navy
          dark: '#002244',       // Deeper Navy
          sky: '#00AEEF',        // KBC Signature Cyan
          lightSky: '#E1F5FE',   // Light Cyan accent
          accent: '#00C853',     // Action Green / Escrow verified
          amber: '#FF9800',      // Bottleneck alert
          purple: '#673AB7',     // Syndicate AI / Kate
          gray: {
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            300: '#CBD5E1',
            600: '#475569',
            800: '#1E293B',
            900: '#0F172A'
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
      },
      keyframes: {
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        }
      }
    },
  },
  plugins: [],
}
