/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./Themes/**/*.vue",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      screens: {
        screen500: "500px",
        screen660: "660px",
      },
      fontFamily: {
        bebas: ["Bebas Neue"],
      },
      letterSpacing: {
        title: "-3.2px",
      },
      colors: {
        white: "#FFFFFF",
        darkBlack: "#0C0E12",
        darkGray: "#282C34",
        darkCharcoal: "#15181E",
        brown: "#564F41",
        lightBeige: "#F5F3F0",
        gold: "#F6B623",
        darkSlate: "#2A2F3A",
        grayBlue: "#9AA4B2",
        labelGray: "#C7C6C4",
        gradientStart: "#FDFCE8",
        gradientEnd: "#CD7C03",
        mutedGray: "#666970",
        darkMuted: "#555553",
        goldBorder: "#55451F",
        dividerGray: "#2F2F2F",
        lightCream: "#F4F3F1",
        cardDark: "#101010",
        footerBorder: "#1B1F26",
        iconHover: "#2F3440",
        tierGold: "#D4AF37",
        tierGray: "#6B7280",
        tierBorder: "#615430",
        darkGoldBorder: "#5D4E1C",
        darkGoldBg: "#312B17",
      },
      backgroundImage: {
        "gradient-spot": "linear-gradient(to right, #FDFCE8 0%, #CD7C03 100%)",
        "gradient-gold": "linear-gradient(to right, #F6B623 0%, #D48311 100%)",
      },
      boxShadow: {
        "gold-glow":
          "0 0 20px rgba(246, 182, 35, 0.5), 0 0 40px rgba(246, 182, 35, 0.3)",
      },
    },
  },
  plugins: [],
};
