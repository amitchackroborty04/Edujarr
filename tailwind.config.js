/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Saira: ['Saira', 'sans-serif'],
      Rowdies: ['Rowdies', 'sans-serif'],
      
    },
    extend: {
      backgroundImage: {
        button_bg: ' linear-gradient(101.61deg, #083F9B 0%, #7F56D9 93.39%)',
        larninbg: "url('../assets/coursebg.png')",
       
        
      },
    },
  },
  plugins: [],
}

