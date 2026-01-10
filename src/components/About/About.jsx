import Section from "../layout/Section"

export default function About() {
  return (
    <Section title="About Me" className="">
      <div className="max-w-5xl text-gray-700 dark:text-gray-300 space-y-4">
        <p>
          I’m a full-stack developer with a strong focus on building modern, reliable,
          and high-performance web applications using Node.js, and automation
          tools. I enjoy working across the entire stack — from designing intuitive
          user interfaces to architecting scalable backend systems that perform well
          under real-world conditions.
        </p>

        <p>
          I’m particularly passionate about turning complex problems into clean,
          maintainable, and intuitive solutions. Writing readable code, designing
          thoughtful architectures, and optimizing performance are central to how I
          approach development.
        </p>

        <p>
          Currently, I’m focused on building scalable applications, improving developer
          experience, and refining workflows that make products easier to maintain,
          extend, and ship efficiently. I’m always learning, experimenting with new
          technologies, and looking for better ways to build meaningful digital
          experiences.
        </p>

      </div>
    </Section>
  )
}
