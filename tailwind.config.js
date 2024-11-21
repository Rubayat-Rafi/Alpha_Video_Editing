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
        BgColor: '#0a0a0a',
        MainColor:"#765eff"
      },
      colors:{
        TextColor: "#fcfcfa",
        SecondTextColor: "#999999"
      }
    },
  },
  plugins: [],
}

