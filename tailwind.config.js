/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "kids-reading":
          "url('https://www.brainscape.com/academy/content/images/2020/09/Kids-reading.jpg')",
      },
      fontFamily: {
        rubik: "Rubik",
      },
      colors: {
        "prime-blue": "#809bce",
        "sec-blue": "#95b8d1",
        "third-ocean": "#b8e0d4",
        "fourth-light-ocean": "#d6eadf",
        "fifth-pink": "#eac4d5",
      },
      keyframes: {
        "wipe-down": {
          "0%": { height: "0%", opacity: "0%" },
          "25%": { height: "30%" },
          "50%": { height: "60%" },
          "75%": { height: "85%" },
          "100%": { height: "100%", opacity: "100%" },
        },
      },
      animation: {
        "wipe-down": "wipe-down 2s ",
      },
    },
  },
  plugins: [],
};
