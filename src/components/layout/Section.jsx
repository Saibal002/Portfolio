import Container from "./Container"

export default function Section({ title, children, className = "" }) {
  return (
    <section className={`py-24 ${className}`}>
      <Container>
        {title && (
          <h2 className="text-3xl font-bold mb-12">
            {title}
          </h2>
        )}
        {children}
      </Container>
    </section>
  )
}
