module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      bg: '#121212',
      primary: '#cccccc',
      error: '#ff5e5e',
    },
    fontFamily: {
      primary: ['Montserrat', 'sans-serif'],
    },
    container: {
      screens: {
        md: '1168px',
      },
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
