/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#0B1232",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "cyan-300" : "#07BEB8",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern-1": "url('/src/assets/herobg1.png')",
        "hero-pattern-2": "url('/src/assets/herobg2.png')",
        "hero-pattern-3": "url('/src/assets/herobg3.png')",
        "hero-pattern-4": "url('/src/assets/herobg4.png')",
        "hero-pattern-5": "url('/src/assets/herobg5.png')",
        "hero-pattern-6": "url('/src/assets/herobg6.png')",
        "hero-pattern-7": "url('/src/assets/herobg7.png')",
      },
    },
  },
  plugins: [],
};
