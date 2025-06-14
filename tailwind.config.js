/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container : {
      center : true,
      padding : '16px',
    },
      extend: {
        screens : {
          '2xl' : '1320px'
        },
        colors : {
          primary :"#808000", //warna utama
          secondary : "#6b7280", //warna abu
          dark : "#000000", //warna hitam
        },
    },
  },
  plugins: [],
}

