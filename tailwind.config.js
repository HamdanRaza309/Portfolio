module.exports = {
  content: [
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'slide-in': 'slide-in 1s ease-out',
      },
      colors: {
        primary: '#9013FE',
        secondary: '#14b8a6',
        accent: '#f43f5e',
        background: '#f3f4f6',
        text: '#1f2937',
        button: '#2563eb',
        buttonHover: '#3b82f6',
        buttonText: '#ffffff',
      },
    },
  },
  plugins: [],
}
