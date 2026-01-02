import { useEffect } from "react"

export default function Modal({ open, onClose, children }) {
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose()
    document.addEventListener("keydown", esc)
    return () => document.removeEventListener("keydown", esc)
  }, [onClose])

  if (!open) return null

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/60 backdrop-blur-sm
      "
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-full max-w-sm mx-4
          rounded-2xl p-6
          bg-white/80 dark:bg-gray-900/80
          backdrop-blur
          border border-white/20 dark:border-white/10
          shadow-xl
          animate-fadeUp
        "
      >
        {children}
      </div>
    </div>
  )
}
