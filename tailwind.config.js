/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'footer-3col': '1fr 1.75fr 1fr',
      },
    },
  },
  plugins: [],
}
