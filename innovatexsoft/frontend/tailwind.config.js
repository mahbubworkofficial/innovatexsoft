/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030014",
        surface: "#0B0A26",
        primary: {
          DEFAULT: "#00C3FF",
          dark: "#008b99",
        },
        secondary: {
          DEFAULT: "#7000FF",
          dark: "#450099",
        },
        accent: "#00C3FF",
        text: {
          primary: "#E2DCE7",
          secondary: "#8B949E",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        futuristic: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
