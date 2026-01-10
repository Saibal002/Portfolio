import Section from "../layout/Section"
import ProjectCard from "./ProjectCard"
import { projectsData } from "./projectsData"
import BinaryAnimation from "../BinaryAnimation.jsx"
export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      className="bg-site-light dark:bg-site-dark"
    >
      {/* Background animation */}
      <BinaryAnimation density={100} />

      {/* Foreground content */}
      <div className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}
