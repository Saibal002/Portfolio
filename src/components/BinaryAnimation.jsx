import { useEffect, useState } from "react";

export default function BinaryAnimation({ density = 100 }) {
  const [bits, setBits] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: density }, (_, i) => ({
      id: i,
      value: Math.random() > 0.5 ? "1" : "0",
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 10,
      size: 10 + Math.random() * 14,
      opacity: 0.15 + Math.random() * 0.3,
    }));

    setBits(generated);
  }, [density]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {bits.map(bit => (
        <span
          key={bit.id}
          className="binary-float absolute font-mono select-none"
          style={{
            left: `${bit.left}%`,
            bottom: "-20%",          // 🔥 START BELOW SECTION
            animationDelay: `${bit.delay}s`,
            animationDuration: `${bit.duration}s`,
            fontSize: `${bit.size}px`,
            opacity: bit.opacity,
            color: "rgb(var(--neon-cyan))",
            textShadow: "0 0 10px rgb(var(--neon-cyan))",
          }}
        >
          {bit.value}
        </span>
      ))}
    </div>
  );
}
