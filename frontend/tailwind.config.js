/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { left: "-40%" },
          "50%": { left: "100%" },
          "100%": { left: "-40%" },
        },
      },
      animation: {
        slide: "slide 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}