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
        'neon-indigo': '0 0 20px rgba(99, 102, 241, 0.3)',
        'neon-cyan': '0 0 20px rgba(6, 182, 212, 0.3)',
        'glass': '0 8px 32px 0 rgba(3, 7, 18, 0.37)',
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