/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "chat": "#212121",
        "border":"#cbd5e11a"
      },
      scale: {
        '2': '5',
      },
      fontFamily:{
        Montserrat:['Montserrat', 'sans-serif'],
        Poppins:['Poppins', 'sans-serif'],
        Roboto:['Roboto', 'sans-serif']
      }
    }
  },
  plugins: [],
}

