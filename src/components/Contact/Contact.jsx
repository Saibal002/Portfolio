import Section from "../layout/Section"
import ContactForm from "./ContactForm"

export default function Contact() {
  return (
    <Section title="Contact" id="contact">
      <div className="grid gap-12 lg:grid-cols-2">
        
        {/* Left text */}
        <div className="text-gray-700 dark:text-gray-300">
          <p className="text-lg mb-4">
            Have a project in mind or want to collaborate?
          </p>
          <p>
            Fill out the form and your message will land directly
            in my Google Sheet.
          </p>
        </div>

        {/* Form */}
        <ContactForm />

      </div>
    </Section>
  )
}
