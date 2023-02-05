/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(etonBlue|goldCrayola|cinnabar|independence|pinkLace)/,
    },
  ],
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        comfortaa: ["var(--font-comfortaa)"],
      },
      colors: {
        etonBlue: "#89BD9E",
        goldCrayola: "#F0C987",
        cinnabar: "#DB4C40",
        independence: "#505168",
        pinkLace: "#F2D7EE",
      },
    },
  },
  plugins: [],
};
