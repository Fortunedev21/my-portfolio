/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'orange-deep': '#C53C0E',
        'orange-light': '#F79B19',
        'blue-intense': '#1D6FC2',
        'blue-dark': '#122035',
        'brown-dark': '#160F0E',
        'green-light': '#EDF3EF',
        'blue-gray': '#203A52',
        'gray-anthracite': '#1B1E21',
        'white-soft': '#EAEDE4',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-delay-1': 'fadeIn 0.8s ease-in-out 0.2s both',
        'fade-in-delay-2': 'fadeIn 0.8s ease-in-out 0.4s both',
        'fade-in-delay-3': 'fadeIn 0.8s ease-in-out 0.6s both',
        'fade-in-delay-4': 'fadeIn 0.8s ease-in-out 0.8s both',
        'fade-in-delay-5': 'fadeIn 0.8s ease-in-out 1s both',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-up-delay': 'slideUp 0.8s ease-out 0.3s both',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'bounce-in': 'bounceIn 0.6s ease-out both',
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceGentle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-5px)' },
          '60%': { transform: 'translateY(-3px)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3) translateY(20px)' },
          '50%': { opacity: '1', transform: 'scale(1.05) translateY(-5px)' },
          '70%': { transform: 'scale(0.95) translateY(0)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
};