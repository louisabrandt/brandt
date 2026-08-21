import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export interface Segment {
  text: string
  className?: string
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[]
  className?: string
  staggerDelay?: number
}

/**
 * Takes an array of { text, className } segments, splits each into individual
 * words (preserving the per-segment className), and slides every word up with
 * a staggered pull-up animation. Words are laid out with inline-flex wrap.
 */
export default function WordsPullUpMultiStyle({
  segments,
  className = '',
  staggerDelay = 0.08,
}: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  // Flatten segments into a single ordered list of words, each carrying its
  // own className, so the stagger index runs continuously across styles.
  const words = segments.flatMap((segment) =>
    segment.text
      .split(' ')
      .filter(Boolean)
      .map((word) => ({ word, className: segment.className ?? '' })),
  )

  return (
    <div
      ref={ref}
      className={`inline-flex flex-wrap justify-center ${className}`}
    >
      {words.map(({ word, className: wordClass }, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{
            duration: 0.6,
            delay: i * staggerDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`inline-block ${wordClass}`}
          style={{ marginRight: '0.22em' }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}
