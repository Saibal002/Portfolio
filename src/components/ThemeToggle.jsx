import { useState } from "react"

export default function ThemeToggle() {
  const initialTheme =
    localStorage.getItem("theme") === "dark"

  const [dark, setDark] = useState(initialTheme)

  const toggleTheme = () => {
    const root = document.documentElement

    if (dark) {
      root.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      root.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }

    setDark(!dark)
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50
      px-4 py-2 rounded-full
      border border-gray-300 dark:border-gray-600
      bg-white dark:bg-gray-800
      text-sm font-medium
      shadow-sm hover:shadow-md transition"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  )
}
