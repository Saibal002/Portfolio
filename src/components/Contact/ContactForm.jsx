import { useState } from "react"

export default function ContactForm() {
  const [status, setStatus] = useState("idle") // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus("loading")

    const formData = new FormData(e.target)
    
    try {
      // REPLACE THE URL BELOW WITH YOUR NEW GOOGLE SCRIPT URL
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwQ9JiE_kC9ztq-Z-dcoXnN-dDIcYjuahuDWT90-oXZqqq8a-OTfC3cm5uHN44VLr5pYQ/exec", 
        {
          method: "POST",
          // 'no-cors' is essential for Google Forms integration to prevent browser blocks
          mode: "no-cors", 
          body: new URLSearchParams(formData), // Automatically handles name, email, message
        }
      )

      // With 'no-cors', we can't check response.ok or get JSON back. 
      // We assume if no error was thrown, it worked.
      e.target.reset()
      setStatus("success")

    } catch (error) {
      console.error("Contact form error:", error)
      setStatus("error")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        rounded-2xl p-8
        bg-white/70 dark:bg-gray-900/60
        backdrop-blur
        border border-white/20 dark:border-white/10
        space-y-4
      "
    >
      {/* Name */}
      <input
        type="text"
        name="name"
        required
        placeholder="Your Name"
        className="
          w-full px-4 py-3 rounded-md
          border border-gray-300 dark:border-gray-700
          bg-transparent
          focus:outline-none focus:ring-2 focus:ring-neon-cyan
        "
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        required
        placeholder="Your Email"
        className="
          w-full px-4 py-3 rounded-md
          border border-gray-300 dark:border-gray-700
          bg-transparent
          focus:outline-none focus:ring-2 focus:ring-neon-cyan
        "
      />

      {/* Message */}
      <textarea
        name="message"
        rows="4"
        required
        placeholder="Your Message"
        className="
          w-full px-4 py-3 rounded-md
          border border-gray-300 dark:border-gray-700
          bg-transparent
          resize-none
          focus:outline-none focus:ring-2 focus:ring-neon-cyan
        "
      />

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="
          px-6 py-3 rounded-md
          bg-neon-cyan text-black
          hover:shadow-neon
          transition
          disabled:opacity-60 disabled:cursor-not-allowed
        "
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {/* Status messages */}
      {status === "success" && (
        <p className="text-green-500 text-sm">
          Message sent successfully!
        </p>
      )}

      {status === "error" && (
        <p className="text-red-500 text-sm">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
