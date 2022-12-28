/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,css}"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
