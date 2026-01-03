// SkillCard.jsx
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
        flex flex-col h-full
        rounded-2xl p-6
        bg-white/50 dark:bg-gray-800/50
        backdrop-blur-md
        border border-white/40 dark:border-white/10
        shadow-xl dark:shadow-2xl shadow-gray-100/50 dark:shadow-black/50
        transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
        hover:border-cyan-500/30 dark:hover:border-cyan-400/20
      `}
    >
      {/* Card Header */}
      <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
        <div className="p-3 rounded-lg bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400">
          <Icon className="text-xl" />
        </div>
        <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">
          {title}
        </h3>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group relative flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white dark:hover:bg-gray-700/50 transition-colors duration-300"
          >
            {/* Tooltip for proficiency */}
            <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="bg-gray-900 text-white text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap">
                {skill.level}
              </span>
            </div>

            {/* Icon Box */}
            <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
               <img 
                 src={skill.img} 
                 alt={skill.name} 
                 className={`w-full h-full object-contain ${skill.darkModeInvert ? 'dark:invert' : ''}`}
               />
            </div>
            
            {/* Skill Name */}
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}