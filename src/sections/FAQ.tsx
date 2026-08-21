import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Asterisk } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import PrimaryCTA from '../components/PrimaryCTA'

interface QA {
  q: string
  a: string
}

const FAQS: QA[] = [
  {
    q: 'Is this therapy?',
    a: 'No. This is not clinical therapy and does not diagnose or treat mental illness. It is structured, reflective relational work that helps you understand patterns, emotional reactions and responsibility — and respond differently. Some clients have been in therapy before; others come precisely because they don’t want therapy.',
  },
  {
    q: 'Do we both need to come?',
    a: 'Not necessarily. Couples work is strongest with both partners, but individual relational work is just as valid — and many people start alone.',
  },
  {
    q: 'What if only one of us wants to start?',
    a: 'That’s common. The work begins with whoever is ready. It stays focused on your perspective, responsibility and development — not on fixing the other person.',
  },
  {
    q: 'How is this different from couples therapy or life coaching?',
    a: 'It isn’t about goal-setting, motivation or performance, and it isn’t clinical treatment. It’s about how you relate under pressure — and building the capacity to stay present in closeness, conflict and responsibility. The focus is depth and integration, not quick results.',
  },
  {
    q: 'Online or in person?',
    a: 'Both. Sessions take place online worldwide, or in person in Paphos, Vienna, Berlin and Miami.',
  },
  {
    q: 'Which languages?',
    a: 'Sessions are available in English and German.',
  },
  {
    q: 'Do you work with international and binational couples?',
    a: 'Yes — frequently. Cultural differences, languages and the isolation that can come with relocation are a common focus of the work.',
  },
  {
    q: 'How long does it take?',
    a: 'There’s no fixed timeline. Some start with a few sessions for clarity; others choose ongoing work over several months for sustainable change. We discuss this in the initial consultation.',
  },
  {
    q: 'Is it confidential?',
    a: 'Yes. Confidentiality is fundamental — it applies from the first contact and continues after the work ends. Nothing is shared with third parties.',
  },
  {
    q: 'What happens in the initial consultation?',
    a: 'A structured, low-pressure first conversation: what brings you here, the patterns you’re noticing, and whether this work fits you right now. There’s no obligation to continue.',
  },
  {
    q: 'Can this save our relationship?',
    a: 'That can’t be promised — and it would be misleading to claim it. My role isn’t to tell you to stay or leave, but to help you gain clarity about your wishes, options and responsibilities, so you can make informed, authentic decisions.',
  },
]

function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item: QA
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-primary/10">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-primary/90 group-hover:text-primary transition-colors text-base sm:text-lg font-normal">
          {item.q}
        </span>
        <Asterisk
          className={`h-4 w-4 shrink-0 text-primary/60 transition-transform duration-300 ${
            isOpen ? 'rotate-90' : ''
          }`}
          strokeWidth={1.5}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-8 max-w-3xl text-primary/70 text-sm sm:text-[15px] leading-[1.6]">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section
      id="faq"
      className="bg-[#0a0a0a] px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24 md:py-28"
    >
      <div className="max-w-4xl mx-auto">
        <SectionLabel align="start" className="mb-5 sm:mb-6">
          Common questions
        </SectionLabel>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-primary mb-8 sm:mb-10 leading-[1.05]">
          Questions, answered honestly.
        </h2>

        <div className="border-t border-primary/10">
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>

        {/* Soft close + CTA */}
        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-primary/70 text-sm md:text-[15px] max-w-md leading-[1.6]">
            Still wondering whether this fits? The initial consultation is the
            simplest way to find out.
          </p>
          <PrimaryCTA />
        </div>
      </div>
    </section>
  )
}
