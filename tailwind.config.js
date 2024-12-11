/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#181818",
        "gray-light": "#393939",
        "light-blue":"#424FB0",
        "primary-blue": "#5568FE",
        "dark-blue": "#5568FE",
        "dark-red": "#1F1F1F",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
