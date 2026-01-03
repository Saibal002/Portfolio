import Section from "../layout/Section"
import ProjectCard from "./ProjectCard"
import { projectsData } from "./projectsData"

export default function Projects() {
  return (
    <Section title="Projects" id="projects">
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
