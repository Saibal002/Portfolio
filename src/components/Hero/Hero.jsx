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
    <section className="relative min-h-screen overflow-hidden bg-slate-950">
      {/* BACKGROUND (LOCKED) */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-indigo-700/20 to-purple-900/40" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

      <Container>
        <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center py-28">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 text-cyan-400 font-medium">
              👋 Welcome to my portfolio
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              <span className="block text-white">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Saibal Chakraborty
              </span>
            </h1>

            <p className="text-gray-300 max-w-xl">
              <b className="text-white">Full-Stack Developer</b> crafting{" "}
              <span className="text-cyan-400">modern, scalable web apps</span>{" "}
              with performance and design in mind.
            </p>

            <div className="flex items-center gap-6 flex-wrap">
              <button className="btn-primary">
                Contact Me →
              </button>

              <button className="text-cyan-400 font-semibold hover:underline">
                View Projects
              </button>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-4 pt-4">
              <a href="#" className="icon-btn">
                ✉️
              </a>
              <a href="#" className="icon-btn">
                in
              </a>
              <a href="#" className="icon-btn">
                gh
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div
              onMouseMove={onMove}
              onMouseLeave={() => setTilt({ x: 0, y: 0 })}
              className="relative transition-transform duration-300"
              style={{
                transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
              }}
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-full ring-glow blur-2xl opacity-50" />

              {/* Image */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-r from-cyan-400 to-purple-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                  <img
                    src={profile}
                    alt="Saibal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-slate-900 border border-cyan-400/40 text-cyan-400 font-semibold">
                Available for work
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
