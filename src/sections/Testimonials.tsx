import { Asterisk } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'

interface Testimonial {
  before: string
  emphasis: string
  after: string
  author: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    before: "We came in stuck in the same argument we'd had for years. The work didn't ‘fix’ us — it helped us ",
    emphasis: 'see what was actually happening between us',
    after: ', and slowly respond differently.',
    author: 'M. & T. (example)',
  },
  {
    before: 'What I appreciated most was ',
    emphasis: 'how grounded it felt',
    after: '. No pressure to perform or change overnight. Just noticing what really happens — and learning to stay.',
    author: 'C. R. (example)',
  },
  {
    before: 'As an international couple, we kept misreading each other across two cultures. This ',
    emphasis: 'gave us language for it',
    after: '.',
    author: 'A. & L. (example)',
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#0a0a0a] px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24 md:py-28"
    >
      <div className="max-w-6xl mx-auto">
        <SectionLabel align="start" className="mb-5 sm:mb-6">
          Client voices
        </SectionLabel>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.author}
              index={i}
              className="noise-overlay relative overflow-hidden rounded-2xl bg-[#212121] p-6 md:p-7 flex flex-col"
            >
              <Asterisk className="h-4 w-4 text-primary/60" strokeWidth={1.5} />
              <p className="mt-4 text-[14px] sm:text-[15px] leading-[1.6] text-primary/85 flex-1">
                {t.before}
                <span className="font-serif italic">{t.emphasis}</span>
                {t.after}
              </p>
              <p className="mt-5 text-xs text-primary/60">{t.author}</p>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-primary/45 text-xs">
          Example placeholders — real, consented client voices will replace
          these.
        </p>
      </div>
    </section>
  )
}
