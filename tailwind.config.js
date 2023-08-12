/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}", "./src/**/*.{html,js}"],
  purge: ["./dist/**/*.{html,js}", "./src/**/*.{html,js,css}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
