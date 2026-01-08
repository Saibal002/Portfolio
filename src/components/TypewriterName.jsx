import { useEffect, useState } from "react";

export default function TypewriterName({
  text,
  speed = 80,
  startDelay = 600, // match fadeUp duration
}) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  // Delay start until fade-up finishes
  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setStarted(true);
    }, startDelay);

    return () => clearTimeout(delayTimer);
  }, [startDelay]);

  // Typing effect
  useEffect(() => {
    if (!started || index >= text.length) {
      if (index >= text.length) setFinished(true);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayed((prev) => prev + text[index]);
      setIndex((i) => i + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [index, text, speed, started]);

  return (
    <span className="inline-flex items-end">
      {displayed}

      {/* Cursor */}
      <span
        className={`
          ml-1 w-[2px] h-[1em] bg-neon-cyan
          ${finished ? "animate-cursorBlink" : ""}
        `}
      />
    </span>
  );
}
