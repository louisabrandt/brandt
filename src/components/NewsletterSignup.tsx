import { useState, type FormEvent } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { useContent } from '../i18n/content'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')

/**
 * Newsletter / stay-in-touch signup (Netlify Forms). Also how people hear
 * about new courses and group formats as they open.
 */
export default function NewsletterSignup() {
  const c = useContent()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!EMAIL_RE.test(email)) {
      setError(c.newsletter.invalidEmail)
      return
    }
    setError('')
    setSubmitting(true)
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'newsletter', email }),
      })
      setSubmitted(true)
    } catch {
      setError(c.newsletter.error)
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex items-center gap-3">
        <span className="flex items-center justify-center h-9 w-9 rounded-full bg-primary/10 shrink-0">
          <Check className="h-4 w-4 text-primary" strokeWidth={1.5} />
        </span>
        <div>
          <p className="text-primary text-sm font-medium">{c.newsletter.successTitle}</p>
          <p className="text-primary/60 text-xs leading-[1.5]">{c.newsletter.successText}</p>
        </div>
      </div>
    )
  }

  return (
    <form
      name="newsletter"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="w-full max-w-sm"
    >
      <input type="hidden" name="form-name" value="newsletter" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>
      <div className="flex items-center gap-2 border-b border-primary/20 focus-within:border-primary/50 transition-colors">
        <input
          type="email"
          name="email"
          placeholder={c.newsletter.placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label={c.newsletter.placeholder}
          className="flex-1 bg-transparent px-0 py-2.5 text-primary placeholder:text-primary/40 text-sm focus:outline-none"
        />
        <button
          type="submit"
          disabled={submitting}
          aria-label={c.newsletter.button}
          className="group flex items-center gap-1.5 text-primary/80 hover:text-primary text-sm font-medium disabled:opacity-60 shrink-0"
        >
          <span>{submitting ? c.newsletter.joining : c.newsletter.button}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
        </button>
      </div>
      {error && (
        <p className="text-primary/70 text-xs mt-2" role="alert">
          {error}
        </p>
      )}
    </form>
  )
}
