import { useState, type FormEvent } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { TEXT_COLOR } from '../constants'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')

const FIELD_CLASS =
  'w-full bg-transparent border-b border-primary/20 px-0 py-3 text-primary placeholder:text-primary/40 text-sm focus:outline-none focus:border-primary/50 transition-colors'

/** Course waitlist form (Netlify Forms). Pass `course` to record which course
 *  the signup came from. */
export default function Waitlist({ course = 'General' }: { course?: string }) {
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
        body: encode({ 'form-name': 'waitlist', name, email, course }),
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
          I&apos;ll be in touch when the next course opens — just the date and
          how to start.
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
      <input type="hidden" name="course" value={course} />
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
