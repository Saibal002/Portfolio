import React from "react";
import profile from "../../assets/profile.jpg.png";
import Container from "../layout/Container";
import ContactQuick from "../Contact/ContactQuick"

export default function Hero() {
  

  return (
    <section className="pt-24 pb-20">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Hi, I’m <span className="text-neon-cyan">Saibal</span>
            </h1>

            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Full-Stack Developer building modern web apps.
            </p>

          <div className="mt-8 space-y-4">
  {/* Buttons row */}
  <div className="flex gap-4 flex-wrap">
    <button
      className="
        px-6 py-3 bg-neon-cyan text-black rounded-md
        hover:shadow-neon transition
      "
    >
      Contact Me
    </button>

    <button
      className="
        px-6 py-3 border border-neon-cyan
        text-neon-cyan rounded-md
        hover:shadow-neonSoft transition
      "
    >
      View Projects
    </button>
  </div>

  {/* Social icons row */}
  <ContactQuick compact className="flex items-center" />
</div>


          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full border-4 border-neon-cyan overflow-hidden hover:shadow-neon transition">
              <img
                src={profile}
                alt="Saibal"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
    
  );
  
}

