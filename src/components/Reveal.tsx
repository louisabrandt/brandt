import { useRef, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'

const ENTRANCE_EASE = [0.22, 1, 0.36, 1] as const

interface RevealProps {
  index?: number
  className?: string
  children: ReactNode
}

/** Shared card/element entrance: fade + scale 0.97 → 1, staggered, once. */
export default function Reveal({ index = 0, className, children }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: ENTRANCE_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
