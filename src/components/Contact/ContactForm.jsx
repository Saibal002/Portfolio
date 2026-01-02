import { useState } from "react"

export default function ContactForm() {
  const [status, setStatus] = useState("idle") // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus("loading")

    // Collect form values
    const formData = new FormData(e.target)
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwKrqHZ35TgZtO996aD6WV38gaJPsBVoTpOgf-jGE5oHXwsqqXWpWOPpwE76Ay4nfg/exec",
        {
          method: "POST",
          body: new URLSearchParams({
            name,
            email,
            message,
          }),
        }
      )

      if (!response.ok) {
        throw new Error("Request failed")
      }

      // Success
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
