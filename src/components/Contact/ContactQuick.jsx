import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"

export default function ContactQuick({ compact = false, className = "" }) {
  return (
    <div className={className}>
      <div
        className={`
          flex gap-3
          ${compact ? "justify-start text-lg" : "justify-center text-2xl"}
        `}
      >
        <a
          href="mailto:saibal02dev@gmail.com"
          aria-label="Email"
          className="
            p-2 rounded-full
            border border-neon-cyan/70 text-neon-cyan
            hover:bg-neon-cyan hover:text-black
            hover:shadow-neon transition
          "
        >
          <FaEnvelope />
        </a>

        <a
          href="https://linkedin.com/in/saibal-chakraborty-06a897297"
          target="_blank"
          aria-label="LinkedIn"
          className="
            p-2 rounded-full
            border border-neon-cyan/70 text-neon-cyan
            hover:bg-neon-cyan hover:text-black
            hover:shadow-neon transition
          "
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/Saibal002"
          target="_blank"
          aria-label="GitHub"
          className="
            p-2 rounded-full
            border border-neon-cyan/70 text-neon-cyan
            hover:bg-neon-cyan hover:text-black
            hover:shadow-neon transition
          "
        >
          <FaGithub />
        </a>
      </div>
    </div>
  )
}
