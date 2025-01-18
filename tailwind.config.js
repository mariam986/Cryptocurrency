/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors:{
        'backgroundcolor':"rgba(13, 13, 43, 1)",
        'color':"rgba(255,255,255,0)",
        'background': "rgba(43, 7, 110, 1)",
       'first':" rgba(43, 7, 110, 1)",
       'second':"rgba(13, 13, 43, 1)",
       'icon':"Neutral / Grey 5"
       

       

      }
    },
  },
  plugins: [],
}

