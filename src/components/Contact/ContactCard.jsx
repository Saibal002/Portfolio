export default function ContactCard({ title, description, action }) {
  return (
    <div
      className="
        rounded-2xl p-8
        bg-white/70 dark:bg-gray-900/60
        backdrop-blur border border-white/20 dark:border-white/10
        transition hover:-translate-y-1 hover:shadow-neonSoft
      "
    >
      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-gray-400 mb-6">
        {description}
      </p>

      {action}
    </div>
  )
}
