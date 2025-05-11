/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 15s linear infinite',
        'heartBurst': 'heartBurst 2s ease-out forwards',
        'roseBurst': 'roseBurst 2.5s ease-out forwards',
        'confetti': 'confetti 3s ease-in forwards',
        'fadeIn': 'fadeIn 0.5s ease-out',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0) rotate(0)' },
          '50%': { transform: 'translateY(-40vh) rotate(180deg)' },
          '100%': { transform: 'translateY(-80vh) rotate(360deg)' },
        },
        heartBurst: {
          '0%': { transform: 'translateY(0) scale(0.6)', opacity: '0.6' },
          '50%': { transform: 'translateY(-100px) scale(1)', opacity: '1' },
          '100%': { transform: 'translateY(-200px) scale(0.2)', opacity: '0' },
        },
        roseBurst: {
          '0%': { transform: 'translateY(0) scale(0.6) rotate(0deg)', opacity: '0.6' },
          '50%': { transform: 'translateY(-120px) scale(1) rotate(180deg)', opacity: '1' },
          '100%': { transform: 'translateY(-240px) scale(0.2) rotate(360deg)', opacity: '0' },
        },
        confetti: {
          '0%': { transform: 'translateY(0) rotate(0)' },
          '100%': { transform: 'translateY(100vh) rotate(720deg)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}