import { useEffect, useState } from "react";

function generateColumn(length) {
  return Array.from({ length }, () =>
    Math.random() > 0.5 ? "1" : "0"
  );
}

export default function BinaryAnimation({ columns = 32 }) {
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: columns }, (_, i) => {
      const length = 18 + Math.floor(Math.random() * 22);

      return {
        id: i,
        left: (i / columns) * 100 + Math.random() * 1.5,
        delay: Math.random() * 6,
        duration: 14 + Math.random() * 14,
        fontSize: 10 + Math.random() * 6,
        opacity: 0.12 + Math.random() * 0.25,
        digits: generateColumn(length),
      };
    });

    setStreams(generated);
  }, [columns]);

  // 🔥 Digit shifting effect
  useEffect(() => {
    const interval = setInterval(() => {
      setStreams(prev =>
        prev.map(stream => {
          const digits = [...stream.digits];

          // mutate 1–3 random digits
          const mutations = 1 + Math.floor(Math.random() * 3);
          for (let i = 0; i < mutations; i++) {
            const idx = Math.floor(Math.random() * digits.length);
            digits[idx] = Math.random() > 0.5 ? "1" : "0";
          }

          return { ...stream, digits };
        })
      );
    }, 420); // subtle, not noisy

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {streams.map(stream => (
        <div
          key={stream.id}
          className="binary-column absolute"
          style={{
            left: `${stream.left}%`,
            animationDelay: `${stream.delay}s`,
            animationDuration: `${stream.duration}s`,
            fontSize: `${stream.fontSize}px`,
            opacity: stream.opacity,
            color: "rgb(var(--neon-cyan))",
            textShadow: "0 0 10px rgb(var(--neon-cyan))",
          }}
        >
          {stream.digits.map((digit, i) => (
            <div
              key={i}
              className={i === 0 ? "opacity-100" : "opacity-60"}
            >
              {digit}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
