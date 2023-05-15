module.exports = {
  // You are missing this block that defines what files tailwind should scan for usage
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        sans: 'Roboto, sans-serif',
      },

      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
          800: '#4DC247', //cor do instagram
        },
        blue: {
          500: '#81D8F7',
          900: '#0080FF', //azul claro
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'                    
        },
        brand:{
          100: '#8257E5',
          500: '#8257E5',
          900: '#6D4ABC',
        },
      },
    },
  },
  plugins: [],
}