import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Asterisk, Check } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import { TEXT_COLOR } from '../constants'

interface Course {
  title: string
  description: string
}

const COURSES: Course[] = [
  {
    title: 'Your patterns, decoded',
    description:
      'Where your ways of loving and protecting yourself began — and how to work with them today.',
  },
  {
    title: 'Staying present in conflict',
    description:
      'Turn the arguments that repeat into conversations that actually connect.',
  },
  {
    title: 'The art of repair',
    description:
      'How trust breaks — and the concrete steps that rebuild it after rupture.',
  },
  {
    title: 'Desire & intimacy',
    description:
      'Reconnect emotional safety with physical closeness, at a pace that works for both of you.',
  },
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')

const EASE = [0.16, 1, 0.3, 1] as const

const FIELD_CLASS =
  'w-full bg-transparent border-b border-primary/20 px-0 py-3 text-primary placeholder:text-primary/40 text-sm focus:outline-none focus:border-primary/50 transition-colors'

function Waitlist() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!EMAIL_RE.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubmitting(true)
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'waitlist', name, email }),
      })
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please email lb@louisabrandt.com.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-3 py-2">
        <span className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10">
          <Check className="h-4 w-4 text-primary" strokeWidth={1.5} />
        </span>
        <h3 className="text-primary text-lg font-normal">You&apos;re on the list.</h3>
        <p className="text-primary/70 text-sm leading-[1.6] max-w-md">
          I&apos;ll be in touch when the next cohort opens — just the date and how
          to join.
        </p>
      </div>
    )
  }

  return (
    <form
      name="waitlist"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      <input type="hidden" name="form-name" value="waitlist" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          className={FIELD_CLASS}
          name="name"
          placeholder="First name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-label="First name"
        />
        <input
          type="email"
          className={FIELD_CLASS}
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email"
        />
      </div>
      {error && (
        <p className="text-primary/70 text-xs" role="alert">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="group mt-1 inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 bg-primary rounded-full pl-5 pr-1.5 py-1.5 text-black font-medium text-sm sm:text-base self-start disabled:opacity-60"
      >
        <span>{submitting ? 'Joining…' : 'Join the waitlist'}</span>
        <span className="flex items-center justify-center bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110">
          <ArrowRight
            className="w-4 h-4 sm:w-5 sm:h-5"
            strokeWidth={1.5}
            style={{ color: TEXT_COLOR }}
          />
        </span>
      </button>
    </form>
  )
}

export default function Courses() {
  return (
    <section
      id="courses"
      className="relative bg-[#0a0a0a] px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24 md:py-28 overflow-hidden"
    >
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <SectionLabel align="start" className="mb-5 sm:mb-6">
          Courses &amp; psychoeducation
        </SectionLabel>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-primary max-w-3xl leading-[1.05]"
        >
          Learn the inner structure, <span className="font-serif italic">together.</span>
        </motion.h2>

        <p className="mt-6 max-w-2xl text-sm md:text-[15px] leading-[1.6] text-primary/70">
          Focused, evidence-based courses on the dynamics that shape
          relationships — taught in small cohorts, so you can understand your
          patterns and practise responding differently, alongside others walking
          the same path.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {COURSES.map((course, i) => (
            <Reveal
              key={course.title}
              index={i}
              className="rounded-2xl bg-[#101010] p-6 md:p-7 flex flex-col"
            >
              <Asterisk className="h-4 w-4 text-primary/70" strokeWidth={1.5} />
              <h3
                className="mt-5 text-lg sm:text-xl font-medium"
                style={{ color: TEXT_COLOR }}
              >
                {course.title}
              </h3>
              <p className="mt-2 text-primary/70 text-sm leading-[1.55]">
                {course.description}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Waitlist */}
        <Reveal
          index={0}
          className="noise-overlay relative overflow-hidden rounded-2xl bg-[#212121] p-6 md:p-8 mt-4 md:mt-5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h3 className="text-primary text-xl sm:text-2xl font-normal leading-snug">
                Join the waitlist
              </h3>
              <p className="mt-3 text-primary/70 text-sm sm:text-[15px] leading-[1.6] max-w-md">
                Courses run in small cohorts. Add your email to hear when the next
                one opens — no spam, just the date and how to join.
              </p>
            </div>
            <Waitlist />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
