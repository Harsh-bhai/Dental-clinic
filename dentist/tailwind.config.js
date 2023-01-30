module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        transx:{
          '0%':{transform:'translateX(-32rem)'},
        '100%':{transform:'translateX(0rem)'},
        },
        opac:{
          '0%':{opacity:'0'},
        '100%':{opacity:'100%'},
        },
      },
      animation:{
        transx:'transx 2s ease-out,opac 2s ease-out',
       
      }
    },
  },
  plugins: [],
}