/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/html/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "steel-blue": "#4682b4",
        "btn-color": "#add8e6",
        "container-bg": "#0000007C",
      },
    },
  },
  plugins: [],
};
