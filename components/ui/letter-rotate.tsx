"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { cn } from "@/lib/utils"

interface LetterRotateProps {
  words: string[]
  duration?: number
  className?: string
}

export function LetterRotate({
  words,
  duration = 2500,
  className,
}: LetterRotateProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, duration)

    return () => clearInterval(interval)
  }, [words, duration])

  // প্রতিটা শব্দের অক্ষরগুলোকে আলাদা করার জন্য split ব্যবহার করা হয়েছে
  const currentWordLetters = words[index].split("")

  return (
    <div className={cn("flex overflow-hidden", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={words[index]}
          className="flex"
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {currentWordLetters.map((letter, i) => (
            <motion.span
              key={`${words[index]}-${i}`}
              variants={{
                initial: { opacity: 0, y: -20},
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 20, rotate: -45 },
              }}
              transition={{
                duration: 0.3,
                delay: i * 0.08, // একেকটি অক্ষরের মধ্যে সামান্য গ্যাপ বা স্ট্যাগার ইফেক্ট
                ease: "easeOut",
              }}
              // স্পেস মেইনটেইন করার জন্য
              className={`${letter === " " ? "whitespace-pre" : "inline-block"}`}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}