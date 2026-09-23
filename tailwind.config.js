/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./view/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF5EF",
        "cream-soft": "#FFFCF7",
        brown: "#784D35",
        "brown-deep": "#4E3122",
        charcoal: "#222222",
        copper: "#B8703B",
        "copper-deep": "#96592D",
        "copper-light": "#EFD9BE",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      keyframes: {
        steamRise: {
          "0%": {
            strokeDashoffset: "40",
            opacity: "0",
            transform: "translateY(6px)",
          },
          "30%": { opacity: ".9" },
          "70%": { strokeDashoffset: "0", opacity: ".5" },
          "100%": {
            strokeDashoffset: "-40",
            opacity: "0",
            transform: "translateY(-10px)",
          },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseFab: {
          "0%, 100%": { boxShadow: "0 16px 34px -12px rgba(78,49,34,0.55)" },
          "50%": { boxShadow: "0 16px 34px -6px rgba(184,112,59,0.7)" },
        },
      },
      animation: {
        steam: "steamRise 3.2s ease-in-out infinite",
        floatY: "floatY 5s ease-in-out infinite",
        pulseFab: "pulseFab 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
