import { useEffect, useRef, useState } from "react"

export default function SkillCard({ title, icon: Icon, skills, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`
        rounded-2xl p-6
        bg-white/70 dark:bg-gray-900/60
        backdrop-blur border border-white/20 dark:border-white/10
        transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        hover:-translate-y-1 hover:shadow-neonSoft
      `}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="text-neon-cyan text-xl">
          <Icon />
        </div>
        <h3 className="font-semibold text-lg">
          {title}
        </h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill.name}
            title={skill.level}
            className="
              group relative px-3 py-1 text-sm rounded-full
              bg-gray-100 dark:bg-gray-800
              text-gray-700 dark:text-gray-300
              border border-gray-200 dark:border-gray-700
              cursor-default
            "
          >
            {skill.name}

            {/* Proficiency hint */}
            <span
              className="
                absolute -top-6 left-1/2 -translate-x-1/2
                opacity-0 group-hover:opacity-100
                text-xs px-2 py-0.5 rounded
                bg-black text-white
                whitespace-nowrap
                transition
              "
            >
              {skill.level}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
