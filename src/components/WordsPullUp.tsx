import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface WordsPullUpProps {
  text: string
  className?: string
  /** Color applied to every word (kept out of className so it can be a hex). */
  color?: string
  staggerDelay?: number
}

/**
 * Splits `text` by spaces and slides each word up (y:20 -> 0) with a
 * staggered delay. Triggered once when the element scrolls into view.
 */
export default function WordsPullUp({
  text,
  className = '',
  color,
  staggerDelay = 0.08,
}: WordsPullUpProps) {
  const words = text.split(' ')
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={{ color }}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{
            duration: 0.6,
            delay: i * staggerDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative inline-block"
          style={{ marginRight: '0.18em' }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}
