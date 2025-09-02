/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        army: "url('/img/bg.jpg')",
      },
    },
  },
  plugins: [],
};
