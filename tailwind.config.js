/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary_1: "hsl(148, 38%, 91%)",
        primary_2: "hsl(169, 82%, 27%)",
        primary_3: "hsl(0, 66%, 54%)",
        secondary_1: "hsl(0, 0%, 100%)",
        secondary_2: "hsl(186, 15%, 59%)",
        secondary_3: "hsl(187, 24%, 22%)",
      },
    },
  },
  plugins: [],
};
