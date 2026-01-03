// Skills.jsx
import Section from "../layout/Section";
import SkillCard from "./SkillCard";
import { skillsData } from "./skillsData";

export default function Skills() {
  return (
    <Section
      title="Technical Proficiency" // slightly more professional title
      className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 py-20"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-cyan-400/10 blur-[100px]" />
         <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
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
      </div>
    </Section>
  );
}