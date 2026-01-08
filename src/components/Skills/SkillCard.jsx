import { useEffect, useRef, useState } from "react";

export default function SkillCard({ title, icon: Icon, skills, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`
        relative group h-full rounded-2xl
        transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
    >
      {/* 1. ANIMATED BORDER LAYER (The Moving Light) */}
    <div className="absolute -inset-[1px] rounded-2xl overflow-hidden z-0">
  <div
    className="
      absolute top-0 left-0
      h-full w-24
      animate-trainTravel
      bg-gradient-to-r
      from-transparent
      via-[rgb(var(--neon-cyan))]
      to-transparent
      opacity-0 group-hover:opacity-100
      transition-opacity duration-500
    "
  />
      </div>

      {/* 2. STATIC BORDER (Fallback when not hovering) */}
      <div className="absolute inset-0 rounded-2xl border border-white/30 dark:border-white/10 z-0 bg-transparent pointer-events-none" />

      {/* 3. CARD CONTENT (Sits on top of the moving light) */}
      <div 
        className="
          relative z-10 h-full p-6 rounded-2xl
          /* Must have background to hide the center of the spinner */
          + bg-white/75 dark:bg-gray-900/70 backdrop-blur-xl
          
          /* Creates the gap for the border to shine through */
          m-[1px]
        "
      >
        {/* Card Header */}
        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
          <div className="p-3 rounded-lg bg-cyan-50 dark:bg-cyan-900/20 text-neon-cyan">
            <Icon className="text-xl" />
          </div>
          <h3 className="font-bold text-lg text-neon-cyan">
            {title}
          </h3>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group/item relative flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-neon-cyan/10 transition-colors duration-300"
            >
              {/* Tooltip */}
              <div className="absolute -top-8 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                <span className="bg-gray-900 text-neon-cyan text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap border border-neon-cyan/20">
                  {skill.level}
                </span>
              </div>

              {/* Icon */}
              <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover/item:scale-110">
                <img
                  src={skill.img}
                  alt={skill.name}
                  className={`w-full h-full object-contain ${skill.darkModeInvert ? 'dark:invert' : ''}`}
                />
              </div>

              {/* Name */}
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover/item:text-neon-cyan transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}