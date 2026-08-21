import { motion, useTransform, type MotionValue } from 'framer-motion'

interface AnimatedLetterProps {
  char: string
  /** Scroll progress (0 -> 1) for the parent paragraph. */
  progress: MotionValue<number>
  /** [start, end] scroll range over which this character reveals. */
  range: [number, number]
}

/**
 * A single character whose opacity is driven by scroll position, fading from
 * 0.2 to 1 as the paragraph scrolls through the viewport. Whitespace is
 * preserved so words don't collapse.
 */
export default function AnimatedLetter({ char, progress, range }: AnimatedLetterProps) {
  const opacity = useTransform(progress, range, [0.2, 1])

  return (
    <motion.span style={{ opacity }} className="inline">
      {char === ' ' ? ' ' : char}
    </motion.span>
  )
}
