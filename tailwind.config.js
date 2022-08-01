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
        "glass-border": "rgba( 255, 255, 255, 0.18 )",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      },
      backdropBlur: {
        glass: "4px",
      },
    },
  },
  plugins: [],
};
