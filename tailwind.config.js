/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        signature: ['Poppins'],
      },
      colors: {
        mySignatureColor: '#000021',
        navColor:'#12123e',
        linksColor:'#9999e2',
        blueViolet:'#9900FF'
      },
    },
  },
  plugins: [],
}
