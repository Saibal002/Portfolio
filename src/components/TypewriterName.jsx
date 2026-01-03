import { useEffect, useState } from "react"

export default function TypewriterName({ text }) {
  const [value, setValue] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setValue((v) => v + text[index])
        setIndex(index + 1)
      }, 80)

      return () => clearTimeout(timer)
    }
  }, [index, text])

  return (
  <span>
    {value}
    <span className="ml-1">|</span>
  </span>
)

}
