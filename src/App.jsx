// import ThemeToggle from "./components/ThemeToggle";
// import profile from "./assets/profile.jpg.png"

// function App() {
//   return (
//     <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
//       <ThemeToggle />
//       <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
//         <div>
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-fadeUp">
//             Hi, I’m <span className="text-neon-cyan animate-fadeUp">Saibal</span>
//           </h1>

//           <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 animate-fadeUp [animation-delay:0.15s]">
//             Full-Stack Developer specializing in React, Node, and Automation.
//           </p>

//           <div className="mt-8 flex gap-4">
//             <button
//               className="px-6 py-3 bg-neon-cyan text-black rounded-md
//   transition hover:shadow-neon"
//             >
//               View Projects
//             </button>

//             <button
//               className="px-6 py-3 border border-neon-cyan text-neon-cyan rounded-md
//   transition hover:shadow-neonSoft"
//             >
//               Contact Me
//             </button>
//           </div>
//         </div>

//         <div className="flex justify-center">
//   <div
//     className="w-64 h-64 rounded-full border-4 border-neon-cyan
//     overflow-hidden
//     bg-gray-200 dark:bg-gray-700
//     transition hover:shadow-neon animate-fadeUp [animation-delay:0.15s]"
//   >
//     <img
//       src={profile}
//       alt="Saibal Chakraborty"
//       className="w-full h-full object-cover"
//     />
//   </div>
// </div>
//       </section>
//     </div>
//   );
// }

// export default App;
import ThemeToggle from "./components/ThemeToggle"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <ThemeToggle />
      <Hero />
      
      <About />
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent mb-10" />

      <Skills />
      <Projects />
      <div className="h-px bg-gradient-to-r from-transparent via-purple-200 dark:via-purple-700 to-transparent mb-16" />

      <Contact />
    </div>
  )
}

export default App

