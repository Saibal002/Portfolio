import Section from "../layout/Section"
import SkillCard from "./SkillCard"
import { skillsData } from "./skillsData"

export default function Skills() {
  return (
    <Section
      title="Skills"
      className="
        relative overflow-hidden
        bg-gradient-to-br
        from-cyan-50 via-purple-50/40 to-cyan-50
        dark:from-gray-900 dark:via-cyan-900/20 dark:to-purple-900/20
        bg-[length:200%_200%]
        animate-gradient
      "
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillsData.map((group, index) => (
          <SkillCard
            key={group.title}
            title={group.title}
            icon={group.icon}
            skills={group.skills}
            index={index}
          />
        ))}
      </div>
    </Section>
  )
}
