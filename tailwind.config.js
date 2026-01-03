export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: "#22d3ee",
          purple: "#a855f7",
        },
      },
      boxShadow: {
    neon: "0 0 20px rgba(34,211,238,0.6)",
    neonSoft: "0 0 12px rgba(34,211,238,0.35)",
  },
  animation: {
    fadeUp: "fadeUp 0.8s ease-out both",
  },
  keyframes: {
    fadeUp: {
      "0%": { opacity: 0, transform: "translateY(20px)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
    
    },
    
  },
  plugins: [],
}
}