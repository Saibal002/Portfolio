import { useEffect, useRef, useState } from "react"

export default function ProjectCard({ project, index }) {
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

  // Helper to ensure links are absolute (e.g. add https:// if missing)
  const getValidUrl = (url) => {
    if (!url) return "#";
    return url.startsWith("http") ? url : `https://${url}`;
  }

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`
        flex flex-col h-full
        rounded-2xl overflow-hidden
        bg-white/70 dark:bg-gray-900/60
        backdrop-blur border border-white/20 dark:border-white/10
        transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        hover:-translate-y-1 hover:shadow-neonSoft
      `}
    >
      {/* Image */}
      <div className="h-48 bg-gray-200 dark:bg-gray-800 overflow-hidden shrink-0">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neon-cyan">
            No preview
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2 text-neon-cyan">
          {project.title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-full
              bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300
              border border-gray-200 dark:border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links Section - UPDATED CONDITION */}
        <div className="flex gap-4 text-sm font-medium mt-auto">
          {/* Only show if live exists AND it is not just a hashtag placeholder */}
          {project.live && project.live !== "#" && (
            <a
              href={getValidUrl(project.live)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-cyan hover:text-cyan-400 hover:underline transition-colors"
            >
              Live Demo
            </a>
          )}
          
          {project.github && (
            <a
              href={getValidUrl(project.github)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-cyan hover:text-cyan-400 hover:underline transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}