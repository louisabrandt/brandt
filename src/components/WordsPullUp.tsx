import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface WordsPullUpProps {
  text: string
  className?: string
  /** Adds a superscript "*" after the final word's last character. */
  showAsterisk?: boolean
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
  showAsterisk = false,
  color,
  staggerDelay = 0.08,
}: WordsPullUpProps) {
  const words = text.split(' ')
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={{ color }}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1
        return (
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
            {showAsterisk && isLast && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">
                *
              </span>
            )}
          </motion.span>
        )
      })}
    </div>
  )
}
