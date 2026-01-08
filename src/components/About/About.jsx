import Section from "../layout/Section"

export default function About() {
  return (
    <Section title="About Me" className="">
      <div className="max-w-5xl text-gray-700 dark:text-gray-300 space-y-4">
        <p >
          I’m a full-stack developer with experience building web applications
          using React, Node.js, and automation tools. I enjoy turning complex problems into simple, intuitive solutions and focusing on clean architecture and performance.
        </p>

       
        <p >
          Currently, I’m focused on building scalable applications and
          improving developer experience.
        </p>
      </div>
    </Section>
  )
}
