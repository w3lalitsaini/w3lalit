/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 10px 60px -5px rgba(88, 30, 130, 1)',
      },
      colors: {
        dark: "var(--dark)",
        white: "var(--white)",
        orange: "var(--orange)",
        grayLight: "var(--gray-light)",
        grayMid: "var(--gray-mid)",
        grayDark: "var(--gray-dark)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        headline: ["Mozilla Headline", "sans-serif"],
      },
    },
  },
  plugins: [],
}