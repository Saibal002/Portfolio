import {
  FaReact,
  FaNodeJs,
  FaTools,
} from "react-icons/fa"

export const skillsData = [
  {
    title: "Frontend",
    icon: FaReact,
    skills: [
      { name: "React", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "HTML", level: "Advanced" },
      { name: "CSS", level: "Advanced" },
      { name: "Tailwind", level: "Intermediate" },
    ],
  },
  {
    title: "Backend",
    icon: FaNodeJs,
    skills: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Express", level: "Intermediate" },
      { name: "REST APIs", level: "Advanced" },
    ],
  },
  {
    title: "Tools & Others",
    icon: FaTools,
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "Automation", level: "Advanced" },
      { name: "Google Scripts", level: "Intermediate" },
    ],
  },
]
