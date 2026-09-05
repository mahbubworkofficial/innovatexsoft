/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        surface: "#0a0a0a",
        primary: {
          DEFAULT: "#7815D0",
          dark: "#5b0fa4",
        },
        secondary: {
          DEFAULT: "#0D46BA",
          dark: "#0a3690",
        },
        accent: "#7815D0",
        text: {
          primary: "#ffffff",
          secondary: "#a1a1aa",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
