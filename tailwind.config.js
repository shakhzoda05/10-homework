/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./pages/*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1240px",
    },
    extend: {
      colors: {
        colorFirst: "#F2CEDA",
        colorSecond: "#D23166",
        colorThird: "#150101",
        colorFourth: "#0F0101",
        colorFifth: "#F8EDF0",
        colorSixth: "#0A0808",
      },
      fontFamily: {
        roboto: "Roboto",
      },
    },
  },
  plugins: [],
};
