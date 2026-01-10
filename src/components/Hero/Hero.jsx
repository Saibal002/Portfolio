import React, { useState } from "react";
import profile from "../../assets/prof_2.png";
import Container from "../layout/Container";
import TypewriterName from "../TypewriterName";
import GridBackground from "../GridBackground";

import ContactQuick from "../Contact/ContactQuick";

export default function Hero() {
  // (Optional) If you aren't using the tilt effect yet, you can leave this state here for later.
  // If you want the tilt on the big image, we need to apply onMouseMove to the image container.
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    // Limiting tilt calculation to large screens for performance
    if (window.innerWidth < 1024) return;

    const r = e.currentTarget.getBoundingClientRect();
    // Reduced tilt intensity slightly for a massive image
    setTilt({
      x: ((e.clientX - r.left) / r.width - 0.5) * 8,
      y: ((e.clientY - r.top) / r.height - 0.5) * -8,
    });
  };
  const onLeave = () => setTilt({ x: 0, y: 0 });


  return (
    <section
      className="
        relative
        min-h-screen 
        flex items-center 
        py-20 lg:py-0 
       /* LIGHT MODE: Subtle Gray */
        bg-site-light
        
        /* DARK MODE: Fully Black Background */
        dark:bg-site-dark
        overflow-hidden 
      "
    >
      <GridBackground />
      <Container className="h-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center h-full">
          {/* Text Area */}
          <div className="order-2 lg:order-1 flex flex-col justify-center z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="block text-gray-800 dark:text-gray-100">Hi, I’m</span>
              <span className="block text-neon-cyan mt-2">
  <TypewriterName text="Saibal Chakraborty" />
</span>

            </h1>

            <p 
  className="
    mt-6 max-w-md
    text-lg md:text-xl  /* <--- Slightly larger than global default */
    leading-relaxed
    text-gray-600 dark:text-gray-300
  "
>
              Full-Stack Developer building modern web apps with passion and precision.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4 flex-wrap">
                {/* Primary */}
              <a
  href="#contact"
  className="
    px-8 py-4 rounded-lg
    bg-neon-cyan text-black font-bold
    
    /* USE THE NEW DYNAMIC SHADOW HERE */
    shadow-neon 
    hover:shadow-neon-strong
    
    hover:-translate-y-1
    transition-all duration-300
  "
>
                  Contact Me
                </a>

                {/* Secondary */}
                <button
                  className="
                    px-8 py-4 rounded-lg
                    border-2 border-neon-cyan/70
                    text-neon-cyan font-medium
                    hover:bg-neon-cyan/10 hover:-translate-y-1
                    transition-all duration-300
                  "
                  
                >
                 <a href="#projects">View Projects</a> 
                </button>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-4 pt-2">
                <span className="h-px w-12 bg-neon-cyan/50" />
                <ContactQuick compact />
              </div>
            </div>
          </div>

          {/* Image Area */}
          {/* Changed justify-center to lg:justify-end to push image right on big screens */}
          <div
             className="order-1 lg:order-2 flex justify-center lg:justify-end items-center h-full perspective-1000"
          >
            {/*
              Image Container - Sizing Strategy:
              1. Mobile/Tablet: Fixed, larger pixel sizes (w-72 -> w-96).
              2. Desktop (lg+): Fluid width constrained by max-width, forced circle by aspect-square.
              3. Safety: max-h-[80vh] prevents overflow on short/wide screens.
            */}
            <div
              onMouseMove={onMove}
              onMouseLeave={onLeave}
              style={{
                 transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
              }}
              className="
                relative
                z-20 // Ensure image sits above background elements
                w-72 h-72
                md:w-96 md:h-96
                lg:w-full lg:h-auto lg:aspect-square lg:max-w-[550px]
                xl:max-w-[700px]
                max-h-[80vh] // Ensure it doesn't exceed viewport height on short screens

                rounded-full
                border-[3px] md:border-4 border-neon-cyan
                overflow-hidden

                /* Enhanced Glow Effect for larger size */
                shadow-neon-glow
                hover:shadow-neon
                transition-all duration-500 ease-out
                will-change-transform
              "
            >
              <img
                src={profile}
                alt="Saibal Chakraborty"
                className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Optional Extra Background Glow Layer behind the image for more depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full md:w-3/4 md:h-3/4 rounded-full bg-neon-cyan/20 blur-[100px] -z-10 pointer-events-none mix-blend-screen dark:mix-blend-soft-light"></div>

          </div>
        </div>
      </Container>
    </section>
  );
}