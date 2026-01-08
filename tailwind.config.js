// export default {
//   darkMode: "class",
//   content: ["./index.html", "./src/**/*.{js,jsx}"],
//   theme: {
//     extend: {
//       colors: {
//         neon: {
//           cyan: "#22d3ee",
//           purple: "#a855f7",
//         },
//       },
//       boxShadow: {
//     neon: "0 0 20px rgba(34,211,238,0.6)",
//     neonSoft: "0 0 12px rgba(34,211,238,0.35)",
//   },
//   animation: {
//     fadeUp: "fadeUp 0.8s ease-out both",
//   },
//   keyframes: {
//     fadeUp: {
//       "0%": { opacity: 0, transform: "translateY(20px)" },
//       "100%": { opacity: 1, transform: "translateY(0)" },
//     },
    
//     },
//   },
//   plugins: [],
// }
// }
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

      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },

        float: {
          "0%,100%": { transform: "translate(0,0) scale(1)", opacity: 0.4 },
          "25%": { transform: "translate(15px,-25px) scale(1.2)", opacity: 0.6 },
          "50%": { transform: "translate(-15px,-50px) scale(0.8)", opacity: 0.8 },
          "75%": { transform: "translate(10px,-25px) scale(1.1)", opacity: 0.5 },
        },

        gradientShift: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },

        pulseSlow: {
          "0%,100%": { opacity: 0.5, transform: "scale(1)" },
          "50%": { opacity: 0.8, transform: "scale(1.05)" },
        },

        slideLeft: {
          "0%": { opacity: 0, transform: "translateX(-50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },

        slideRight: {
          "0%": { opacity: 0, transform: "translateX(50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },

        glow: {
          "0%,100%": {
            boxShadow:
              "0 0 30px rgba(34,211,238,0.4), 0 0 60px rgba(168,85,247,0.2)",
          },
          "50%": {
            boxShadow:
              "0 0 50px rgba(34,211,238,0.6), 0 0 80px rgba(168,85,247,0.4)",
          },
        },

        spinSlow: {
          to: { transform: "rotate(360deg)" },
        },

        shimmer: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(100%)" },
        },
      },

      animation: {
        fadeUp: "fadeUp 0.8s ease-out both",
        float: "float 8s ease-in-out infinite",
        gradient: "gradientShift 8s ease infinite",
        pulseSlow: "pulseSlow 4s ease-in-out infinite",
        slideLeft: "slideLeft 0.8s ease-out forwards",
        slideRight: "slideRight 1s ease-out forwards",
        glow: "glow 3s ease-in-out infinite",
        spinSlow: "spinSlow 20s linear infinite",
        shimmer: "shimmer 3s infinite",
      },
    },
  },
  plugins: [],
};
