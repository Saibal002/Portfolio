import { useState } from "react";
import {
  GraduationCap,
  School,
  CalendarDays,
  Award,
  ChevronDown,
  ChevronUp,
  Target,
} from "lucide-react";

import Section from "../layout/Section";

const education = [
  {
    id: 1,
    current: true,
    icon: GraduationCap,
    title: "Bachelor of Technology",
    specialization: "Information Technology",
    institute: "College of Engineering and Management, Kolaghat",
    duration: "2022 – 2025",
    score: "CGPA : 8.15 / 10",
  },

  {
    id: 2,
    icon: GraduationCap,
    title: "Diploma",
    specialization: "Computer Science & Technology",
    institute: "Dr. M.S.I.T Government Polytechnic, Haldia",
    duration: "2019 – 2022",
    score: "CGPA : 8.0 / 10",
  },

  {
    id: 3,
    icon: School,
    title: "Higher Secondary",
    specialization: "Science (PCMB)",
    institute: "Kharui Union High School",
    duration: "2017-2019",
    score: "Percentage : 65%",
  },
   {
    id: 4,
    icon: School,
    title: "Secondary",
    specialization: "",
    institute: "Barnan High School",
    duration: "2011-2017",
    score: "Percentage : 80%",
  },
];

export default function Education() {
  const [openCard, setOpenCard] = useState(1);

  return (
    <Section id="education" title="Education">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          

          <p className="mt-4 max-w-5xl mx-auto">
            Every milestone has shaped my foundation as a developer.
            Here's the journey that brought me here.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div
            className="
              absolute
              left-5
              top-0
              bottom-0
              w-[2px]
              bg-neon-cyan/30
            "
          />

          {education.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="relative flex gap-8 pb-12"
              >
                {/* Timeline Node */}

                <div className="relative z-10">

                  <div
                    className="
                      h-10
                      w-10
                      rounded-full
                      bg-site-dark
                      border-2
                      border-neon-cyan
                      flex
                      items-center
                      justify-center
                      shadow-neon
                    "
                  >
                    <Icon
                      size={18}
                      className="text-neon-cyan"
                    />
                  </div>

                </div>

                {/* Card */}

                <div
                  className="
                    flex-1
                    rounded-2xl
                    border
                    border-neon-cyan/20
                    bg-white/60
                    dark:bg-white/5
                    backdrop-blur-xl
                    p-5
                    transition-all
                    duration-300
                    hover:border-neon-cyan
                    hover:shadow-neon
                  "
                >
                 <div className="flex items-start justify-between gap-4">

  {/* Left */}
  <div className="flex items-center gap-3 flex-wrap">

    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
      {item.title}
    </h3>

    {item.current && (
      <span
        className="
          px-3
          py-1
          rounded-full
          text-xs
          bg-neon-cyan
          text-black
          font-semibold
        "
      >
        Recent
      </span>
    )}

  </div>

  {/* Right */}
  <div
    className="
      flex
      items-center
      gap-2
      text-sm
      md:text-base
      font-medium
      text-gray-500
      dark:text-gray-400
      whitespace-nowrap
      shrink-0
    "
  >
    <CalendarDays size={16} />
    <span>{item.duration}</span>
  </div>

</div>

{/* Subtitle */}
{item.specialization && (
  <p className="mt-2 text-neon-cyan font-medium text-base">
    {item.specialization}
  </p>
)}

                  <div className="grid md:grid-cols-2 gap-6 mt-6">

                    <div>
                      <p className="text-sm text-gray-500">
                        Institute
                      </p>

                      <p>{item.institute}</p>
                    </div>


                    <div>
                      <p className="text-sm text-gray-500">
                        Result
                      </p>

                      <p>{item.score}</p>
                    </div>

                  </div>

                

                </div>

              </div>
            );
          })}

          {/* Future Goal */}

          <div className="relative flex gap-8">

            <div className="relative z-10">

              <div
                className="
                  h-10
                  w-10
                  rounded-full
                  border-2
                  border-dashed
                  border-neon-cyan
                  flex
                  items-center
                  justify-center
                "
              >
                <Target
                  size={18}
                  className="text-neon-cyan"
                />
              </div>

            </div>

            <div
              className="
                flex-1
                rounded-2xl
                border
                border-dashed
                border-neon-cyan/40
                p-6
              "
            >

              <h3 className="text-xl font-bold">
                Next Destination
              </h3>

              <p className="mt-3">
                Looking for opportunities as a
                Full Stack Developer /
                Backend Developer /
                Software Engineer.
              </p>

            </div>

          </div>

        </div>

      </div>
    </Section>
  );
}