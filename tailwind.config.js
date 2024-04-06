/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      "green":"#0B7509",
      "light-green":"#C7FBCF",
      "dark-green":"#0A611D",
      "purple":"#730975",
      "light-purple":"#730975B8",
      "dark-purple":"#730975",
      "taint-white":"#F7F4E5",
      "light-yellow":"#DBED94",
      "neutral-col-900":"#121111",
      "neutral-col-800":"#000000E6",
      "neutral-col-700":"#000000CC",
      "neutral-col-600":"#000000B3",
      "neutral-col-500":"#00000099",
      "neutral-col-400":"#00000080",
      "neutral-col-300":"#00000066",
      "neutral-col-200":"#0000004D",
      "neutral-col-100":"#00000033",
      "neutral-col-50":"#0000001A",
      },
      fontFamily:{
        "roboto":["Roboto", "sans-serif"],
        "roboto-serif":["Roboto Serif", "serif"],
      },
      boxShadow:{
        "umbra":'0px 16px 24px 2px rgba(0, 0, 0, 0.14)',
        "penumbra":'0px 6px 30px 5px rgba(0, 0, 0, 0.12)',
        "ambient":'0px 8px 10px rgba(0, 0, 0, 0.2)',
      },
      screens:{
        '2xl': {'max': '1535px'},
        'xl': {'max': '1279px'},
        'lg': {'max': '1023px'},
        'md': {'max': '767px'},
        'sm': {'max': '479px'},
        'xs': {'max': '320px'},
      },
      backgroundImage:{
        'carousel-1':'url(/assets/images/carousel-1.jpg)',
        'carousel-2':'url(/assets/images/carousel-2.jpg)',
        'carousel-3':'url(/assets/images/carousel-3.jpg)',
        'why-choose-us':'url(/assets/images/why.jpg)',
        'leaf-bg':'url(/assets/images/leafBg.svg)',
        'offer-bg':'url(/assets/images/offer.jpg)',
      }
    },
  },
  plugins: [],
}
