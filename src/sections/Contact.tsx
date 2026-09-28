import { useState, useEffect, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import { useContent } from '../i18n/content'

const FIELD_CLASS =
  'w-full bg-transparent border-b border-primary/20 px-0 py-3 text-primary placeholder:text-primary/40 text-sm focus:outline-none focus:border-primary/50 transition-colors'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')

export default function Contact() {
  const c = useContent()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [searchParams] = useSearchParams()

  // Prefill the message when arriving from a course's "book" button.
  useEffect(() => {
    const kurs = searchParams.get('kurs')
    if (kurs) setMessage((m) => (m ? m : c.contact.coursePrefill + kurs))
  }, [searchParams, c.contact.coursePrefill])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!firstName.trim() || !lastName.trim() || !message.trim()) {
      setError(c.contact.errName)
      return
    }
    if (!EMAIL_RE.test(email)) {
      setError(c.contact.errEmail)
      return
    }
    setError('')
    setSubmitting(true)
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', firstName, lastName, email, phone, message }),
      })
      setSubmitted(true)
    } catch {
      setError(c.contact.errSend)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="bg-[#0a0a0a] px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24 md:py-28"
    >
      <div className="max-w-6xl mx-auto">
        <SectionLabel align="start" className="mb-5 sm:mb-6">
          {c.contact.eyebrow}
        </SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left — intro + meta */}
          <div className="lg:col-span-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-primary leading-[1.05] max-w-xl">
              {c.contact.heading}
            </h2>
            <p className="mt-6 max-w-md text-sm md:text-[15px] leading-[1.65] text-primary/70">
              {c.contact.intro}
            </p>

            <div className="mt-10 space-y-4 text-sm">
              <div>
                <p className="text-primary/50 text-[11px] uppercase tracking-[0.22em]">{c.contact.emailLabel}</p>
                <a href="mailto:lb@louisabrandt.com" className="text-primary hover:text-primary/70 transition-colors">
                  lb@louisabrandt.com
                </a>
              </div>
              <div>
                <p className="text-primary/50 text-[11px] uppercase tracking-[0.22em]">{c.contact.sessionsLabel}</p>
                <p className="text-primary/80 leading-[1.6]">{c.contact.sessionsText}</p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#101010] p-6 md:p-8">
              {submitted ? (
                <div className="flex flex-col items-start gap-4 py-6">
                  <span className="flex items-center justify-center h-11 w-11 rounded-full bg-primary/10">
                    <Check className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </span>
                  <h3 className="text-primary text-xl font-normal">{c.contact.successTitle}</h3>
                  <p className="text-primary/70 text-sm leading-[1.6] max-w-md">{c.contact.successText}</p>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                    </label>
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input
                      className={FIELD_CLASS}
                      name="firstName"
                      placeholder={c.contact.first}
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      aria-label={c.contact.first}
                    />
                    <input
                      className={FIELD_CLASS}
                      name="lastName"
                      placeholder={c.contact.last}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      aria-label={c.contact.last}
                    />
                  </div>
                  <input
                    type="email"
                    className={FIELD_CLASS}
                    name="email"
                    placeholder={c.contact.email}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label={c.contact.email}
                  />
                  <input
                    type="tel"
                    className={FIELD_CLASS}
                    name="phone"
                    placeholder={c.contact.phone}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    aria-label={c.contact.phone}
                  />
                  <textarea
                    className={`${FIELD_CLASS} min-h-[110px] resize-y`}
                    name="message"
                    placeholder={c.contact.message}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    aria-label={c.contact.message}
                  />

                  {error && (
                    <p className="text-primary/70 text-xs" role="alert">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group mt-1 inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 bg-[#B4552E] hover:bg-[#9E4826] rounded-full pl-5 pr-1.5 py-1.5 text-[#F3ECDE] font-medium text-sm sm:text-base self-start disabled:opacity-60"
                  >
                    <span>{submitting ? c.contact.sending : c.contact.submit}</span>
                    <span className="flex items-center justify-center bg-[#7C3A1E] rounded-full w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#F3ECDE]" strokeWidth={1.5} />
                    </span>
                  </button>

                  <p className="text-primary/45 text-xs leading-[1.6]">{c.contact.trust}</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
