/** @type {import('tailwindcss').Config} */
module.exports = {
  jit: true,
  content: ["./dist/**/*.{html,js}", "./src/**/*.{html,js}"],
  purge: ["./dist/**/*.{html,js}", "./src/**/*.{html,js,jsx,css}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
