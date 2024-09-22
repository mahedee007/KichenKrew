/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      body:["Lexend", "sans-serif"]
    },
    extend: {
      backgroundImage: {
        'banner':"url('/src/assets/banner.jpg')",
      },
    },
  },
  plugins: [],
}
