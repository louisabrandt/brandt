import { useEffect, useRef, useState } from 'react'

interface LazyVideoProps {
  src: string
  /** Applied to the wrapper (e.g. "absolute inset-0 h-full w-full"). */
  className?: string
  /** Start loading this far before the element scrolls into view. */
  rootMargin?: string
  /**
   * A still image shown before (and behind) the video. It's painted from the
   * prerendered markup, so it carries the first paint instead of the video —
   * and it stays visible for visitors who prefer reduced motion.
   */
  poster?: string
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * A decorative background video that only loads once it is near the viewport
 * (so a below-the-fold clip doesn't cost megabytes on first paint), skips
 * loading entirely for visitors who prefer reduced motion, and keeps a solid
 * dark background so there is never a flash or empty frame.
 */
export default function LazyVideo({
  src,
  className = '',
  rootMargin = '400px',
  poster,
}: LazyVideoProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion()) return // leave the dark background, no video

    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setShow(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true)
          io.disconnect()
        }
      },
      { rootMargin },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin])

  return (
    <div
      ref={ref}
      className={`${className} bg-[#2E3A33] bg-cover bg-center`}
      style={poster ? { backgroundImage: `url(${poster})` } : undefined}
      aria-hidden="true"
    >
      {show && (
        <video
          className="h-full w-full object-cover"
          src={src}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
      )}
    </div>
  )
}
