/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
      fontFamily:{
        Sora: ["Sora", "sans-serif"],
        Instrument: ["Instrument Serif", "serif"]
      },
      backgroundColor:{
        BgColor: '#0a0416',
        MainColor:"#765eff",
        BgSecondColor: "#2c1642",
        BgThirdColor: "#301562"

      },
      colors:{
        TextColor: "#fcfcfa",
        SecondTextColor: "#999999",
        MainColor:"#765eff",
      },
      outlineColor: {
        mainColor: "#895543"
      },
    },
  },
  plugins: [require('daisyui'),],
}

                      
/* background: linear-gradient(360deg, #e09215,#2c1642,#301562); */
/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */   
