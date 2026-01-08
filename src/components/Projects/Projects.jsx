import Section from "../layout/Section"
import ProjectCard from "./ProjectCard"
import { projectsData } from "./projectsData"

export default function Projects() {
  return (
    <Section id="projects" title="Projects"  className=" /* APPLY THEME BACKGROUND GLOBALLY */
        bg-site-light dark:bg-site-dark">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>
    </Section>
  )
}
