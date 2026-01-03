import { 
  FaCode, 
  FaServer, 
  FaDatabase, 
  FaBrain, 
  FaPaintBrush, 
  FaTools 
} from "react-icons/fa";

export const skillsData = [
  // 1. Frontend
  {
    title: "Frontend",
    icon: FaCode,
    skills: [
     
      { 
        name: "HTML5", 
        level: "Expert", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
      },
      { 
        name: "CSS3", 
        level: "Expert", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
      },
        { 
        name: "JavaScript", 
        level: "Advanced", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
      },
       { 
        name: "React", 
        level: "Intermediate", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
      },
    
      
      { 
        name: "Tailwind", 
        level: "Intermediate", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" 
      },
      { 
        name: "Bootstrap", 
        level: "Intermediate", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" 
      },
    ],
  },

  // 2. Backend & Languages (Grouped Java/C here)
  {
    title: "Backend & Core",
    icon: FaServer,
    skills: [
      { 
        name: "Node.js", 
        level: "Intermediate", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
      },
      { 
        name: "Express", 
        level: "Intermediate", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        darkModeInvert: true
      },
      { 
        name: "Java", 
        level: "Intermediate", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
      },
      { 
        name: "C Programming", 
        level: "Intermediate", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" 
      },
    ],
  },
  // 3. Database & Cloud
  {
    title: "Data & Cloud",
    icon: FaDatabase,
    skills: [
      { 
        name: "MongoDB", 
        level: "Advanced", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
      },
      { 
        name: "Redis", 
        level: "Intermediate", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" 
      },
      { 
        name: "PostgreSQL", 
        level: "Intermediate", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
      },
      { 
        name: "JWT Auth", 
        level: "Advanced", 
        img: "https://jwt.io/img/pic_logo.svg" 
      },
    ],
  },

  // 4. AI & Data Science (New Category)
  {
    title: "AI & Vision",
    icon: FaBrain,
    skills: [
      { 
        name: "TensorFlow", 
        level: "Intermediate", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" 
      },
      { 
        name: "Keras", 
        level: "Intermediate", 
        img: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" 
      },
      { 
        name: "OpenCV", 
        level: "Advanced", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" 
      },
    
    ],
  },

  

  // 5. Tools & Others
  {
    title: "Tools & DevOps",
    icon: FaTools,
    skills: [
      { 
        name: "Git", 
        level: "Advanced", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
      },
      { 
        name: "GitHub", 
        level: "Advanced", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        darkModeInvert: true
      },
      { 
        name: "VS Code", 
        level: "Advanced", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" 
      },
    ],
  },
   // 6. Design & Creative (New Category)
  {
    title: "Design & Game",
    icon: FaPaintBrush,
    skills: [
      { 
        name: "Unity 2D", 
        level: "Intermediate", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
        darkModeInvert: true
      },
      { 
        name: "Figma", 
        level: "Intermediate", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" 
      },
      { 
        name: "Photoshop", 
        level: "Advanced", 
        // Switched to the more colorful 'plain' version
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" 
      },
      { 
        name: "Illustrator", 
        level: "Intermediate", 
        // Switched to the more colorful 'plain' version
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" 
      },
      { 
        name: "Lightroom", 
        level: "Advanced", 
        img: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg" 
      },
      { 
        name: "Canva", 
        level: "Expert", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" 
      },
    ],
  },
];