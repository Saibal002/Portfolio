import {
  MapPin,
  Mail,
  Phone,
  Clock,
} from "lucide-react";

import Section from "../layout/Section";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Section title="Contact" id="contact">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        {/* Left Side */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
            Let's Build Something Great Together
          </h3>

          <p className="mt-5 text-gray-600 dark:text-gray-300 leading-relaxed">
            Whether you're looking for a Full-Stack Developer, or simply want to connect / colab ?
          </p>

          <div className="mt-10 space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20">
                <MapPin className="text-neon-cyan" size={22} />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Address
                </h4>

                <p className="text-gray-600 dark:text-gray-300">
                  Kolkata, West Bengal, India
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20">
                <Mail className="text-neon-cyan" size={22} />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Email
                </h4>

                <a
                  href="mailto:yourmail@example.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-neon-cyan transition"
                >
                  saibal02dev@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20">
                <Phone className="text-neon-cyan" size={22} />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Phone
                </h4>

                <a
                  href="tel:+91XXXXXXXXXX"
                  className="text-gray-600 dark:text-gray-300 hover:text-neon-cyan transition"
                >
                  +91 62946 14808
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20">
                <Clock className="text-neon-cyan" size={22} />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Availability
                </h4>

                <p className="text-gray-600 dark:text-gray-300">
                  Open to Full-time, Internship & Freelance opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          
        </div>

        {/* Right Side */}
        <ContactForm />
      </div>
    </Section>
  );
}
