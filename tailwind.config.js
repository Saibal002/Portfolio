/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: "rgb(var(--neon-cyan) / <alpha-value>)",
          purple: "rgb(var(--neon-purple) / <alpha-value>)",
        },
      },
      backgroundImage: {
        "site-light": "var(--bg-light)",
        "site-dark": "var(--bg-dark)",
      },
      boxShadow: {
        neon: "0 0 20px rgb(var(--neon-cyan) / 0.5)",
        "neon-strong": "0 0 30px rgb(var(--neon-cyan) / 0.6)",
        "neon-glow": "0 0 60px rgb(var(--neon-cyan) / 0.35)",
      },
      
      keyframes: {
        shimmer: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(100%)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        // FIXED NAME HERE (trainTravel)
        trainTravel: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "5%": { opacity: "1" },
          "95%": { opacity: "1" },
          "100%": { transform: "translateX(100vw)", opacity: "0" },
        },
        cursorBlink: {
    "0%, 100%": { opacity: "1" },
    "50%": { opacity: "0" },
  },
      },
      animation: {
        shimmer: "shimmer 3s infinite",
        fadeUp: "fadeUp 0.5s ease-out forwards",
        // FIXED REFERENCE HERE (references trainTravel defined above)
        trainTravel: "trainTravel 5s linear infinite",
        cursorBlink: "cursorBlink 1.2s steps(1) infinite",
        
      },
      fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
    },
    },
  },
  plugins: [],
};