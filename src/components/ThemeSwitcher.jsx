import React, { useEffect, useState } from "react";

// The available themes matching the data-theme attributes in CSS
const themes = [
  // Core / Original
  { id: "default", name: "🌊 Ocean", color: "#38bdf8" },
  { id: "cyberpunk", name: "👾 Cyber", color: "#f472b6" },
  { id: "terminal", name: "🧪 Matrix", color: "#4ade80" },
  { id: "luxury", name: "🏆 Gold", color: "#fbbf24" },

  // Newly added themes
  { id: "sunset", name: "🌅 Sunset", color: "#fb923c" },
  { id: "crimson", name: "🩸 Crimson", color: "#f87171" },
  { id: "aurora", name: "🌈 Aurora", color: "#2dd4bf" },

  { id: "glacier", name: "❄️ Glacier", color: "#bae6fd" },
  { id: "cosmic", name: "🌌 Cosmic", color: "#8b5cf6" },
  { id: "forest", name: "🌿 Forest", color: "#22c55e" },
  { id: "neuro", name: "🧠 Neuro", color: "#22d3ee" },
  { id: "inferno", name: "🔥 Inferno", color: "#fb7185" },
  { id: "obsidian", name: "🌑 Obsidian", color: "#020617" },
];

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  
  // State for Dark Mode
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true" || 
             document.documentElement.classList.contains("dark");
    }
    return false;
  });

  // State for Color Theme
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem("colorTheme") || "default";
  });

  // 1. Handle Dark Mode Toggle
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDark]);

  // 2. Handle Color Theme Change
  useEffect(() => {
    const root = document.documentElement;
    // Remove old theme attribute if default, otherwise set it
    if (currentTheme === "default") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", currentTheme);
    }
    localStorage.setItem("colorTheme", currentTheme);
  }, [currentTheme]);

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-2">
      
      {/* Dark/Light Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="
          p-2 rounded-full border border-gray-200 dark:border-gray-700
          bg-white/80 dark:bg-gray-900/80 backdrop-blur-md
          shadow-lg hover:scale-105 transition-all
        "
      >
        {isDark ? "🌙" : "☀️"}
      </button>

      {/* Theme Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            flex items-center gap-2 px-4 py-2 rounded-full 
            border border-gray-200 dark:border-gray-700
            bg-white/80 dark:bg-gray-900/80 backdrop-blur-md
            shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all
          "
        >
          <span className="w-4 h-4 rounded-full" style={{ 
            backgroundColor: themes.find(t => t.id === currentTheme)?.color 
          }} />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
            Theme
          </span>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="
            absolute right-0 mt-3 w-40 py-2 rounded-xl 
            bg-white dark:bg-gray-900 
            border border-gray-100 dark:border-gray-800
            shadow-xl animate-fadeUp origin-top-right
          ">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  setCurrentTheme(theme.id);
                  setIsOpen(false);
                }}
                className={`
                  w-full px-4 py-2 text-left text-sm flex items-center gap-3
                  hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors
                  ${currentTheme === theme.id ? "text-neon-cyan font-bold" : "text-gray-600 dark:text-gray-400"}
                `}
              >
                <span 
                  className="w-3 h-3 rounded-full shadow-sm" 
                  style={{ backgroundColor: theme.color }} 
                />
                {theme.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}