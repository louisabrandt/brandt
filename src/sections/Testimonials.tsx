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
    before:
      "We came in stuck in the same argument we'd had for years. The work never tried to fix us. It helped us ",
    emphasis: 'see what was really happening between us',
    after: ', and slowly start responding differently.',
    author: 'M. & T. (example)',
  },
  {
    before: 'What I valued most was ',
    emphasis: 'how grounded it felt',
    after:
      '. No pressure to perform or change overnight. Just noticing what really happens, and learning to stay.',
    author: 'C. R. (example)',
  },
  {
    before:
      'As an international couple, we kept misreading each other across two cultures. This finally ',
    emphasis: 'gave us words for it',
    after: '.',
    author: 'A. & L. (example)',
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#efe9de] px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24 md:py-28"
    >
      <div className="max-w-6xl mx-auto">
        <SectionLabel tone="ink" align="start" className="mb-5 sm:mb-6">
          Client voices
        </SectionLabel>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#23201a] max-w-2xl mb-10 leading-[1.05]">
          What people carry out of the work.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.author}
              index={i}
              className="rounded-2xl bg-[#f5f0e6] border border-[#23201a]/8 p-6 md:p-7 flex flex-col"
            >
              <Asterisk className="h-4 w-4 text-[#5e6b4a]" strokeWidth={1.5} />
              <p className="mt-4 text-[15px] leading-[1.65] text-[#23201a]/85 flex-1">
                {t.before}
                <span className="font-serif italic">{t.emphasis}</span>
                {t.after}
              </p>
              <p className="mt-5 text-xs text-[#23201a]/55">{t.author}</p>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-[#23201a]/45 text-xs">
          Example placeholders. Real, consented client voices will replace these.
        </p>
      </div>
    </section>
  )
}
