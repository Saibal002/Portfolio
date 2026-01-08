import React, { useState } from "react";
import profile from "../../assets/profile.png";
import Container from "../layout/Container";
import ContactQuick from "../Contact/ContactQuick";

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({
      x: ((e.clientX - r.left) / r.width - 0.5) * 12,
      y: ((e.clientY - r.top) / r.height - 0.5) * -12,
    });
  };

  return (
    <section
      className="
  relative pt-32 pb-28
  bg-gradient-to-b
  from-transparent via-cyan-50/40 to-transparent
  dark:via-cyan-900/10
"
    >
      <Container>
        <div className="grid md:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Text */}
          <div>
           {/* <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
  <span className="block">Hi, I’m</span>

  <span
    className="
      block mt-1
      text-neon-cyan
      relative overflow-hidden
      animate-nameReveal
    "
  >
    Saibal Chakraborty
  </span>
</h1> */}
<h1 className="text-4xl font-bold">
  <span className="block">Hi, I’m</span>
  <span className="block text-neon-cyan">Saibal Chakraborty</span>
</h1>


            <p
              className="
  mt-6 max-w-md
  text-lg leading-relaxed
  text-gray-600 dark:text-gray-400
"
            >
              Full-Stack Developer building modern web apps.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex gap-4 flex-wrap">
                {/* Primary */}
                <button
                  className="
      px-7 py-3 rounded-md
      bg-neon-cyan text-black font-medium
      hover:shadow-neon hover:-translate-y-0.5
      transition-all duration-300
    "
                href="#contact">
                  Contact Me
                </button>

                {/* Secondary */}
                <button
                  className="
      px-7 py-3 rounded-md
      border border-neon-cyan/70
      text-neon-cyan
      hover:bg-neon-cyan/10 hover:-translate-y-0.5
      transition-all duration-300
    "
                >
                  View Projects
                </button>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-4 pt-1">
                <span className="h-px w-10 bg-neon-cyan/40" />
                <ContactQuick compact />
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div
  className="
    w-64 h-64
    lg:w-80 lg:h-80
    xl:w-[360px] xl:h-[360px]
    rounded-full
    border-4 border-neon-cyan
    overflow-hidden
    shadow-[0_0_30px_rgba(34,211,238,0.25)]
    hover:shadow-[0_0_45px_rgba(34,211,238,0.4)]
    transition-all duration-300
  "
>
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