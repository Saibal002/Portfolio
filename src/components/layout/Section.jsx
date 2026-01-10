import Container from "./Container"

export default function Section({id, title, children, className = "" }) {
  return (
    <section
  id={id}
  className={`relative overflow-hidden py-24 ${className}`}
>

      <Container>
        {title && (
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-neon-cyan text-center">
            {title}
          </h2>
        )}
        {children}
      </Container>
      
    </section>
  )
}
