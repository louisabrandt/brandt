import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import PrimaryCTA from '../components/PrimaryCTA'

interface QA {
  q: string
  a: string
}

const FAQS: QA[] = [
  {
    q: 'Is this therapy?',
    a: "No. This isn't clinical therapy, and it doesn't diagnose or treat mental illness. It's structured, reflective relational work that helps you understand your patterns, your reactions and your part in them, so you can respond differently. Some people have been in therapy before. Others come precisely because they don't want therapy.",
  },
  {
    q: 'Do we both need to come?',
    a: 'Not necessarily. Couples work is strongest with both partners in the room, but individual relational work is just as valid, and many people start on their own.',
  },
  {
    q: 'What if only one of us wants to start?',
    a: "That's common. The work begins with whoever is ready. It stays focused on your perspective, your growth and your side of the dynamic, not on fixing the other person.",
  },
  {
    q: 'How is this different from couples therapy or life coaching?',
    a: "It isn't about goal-setting, motivation or performance, and it isn't clinical treatment. It's about how you relate when things get hard, and about building the capacity to stay present in closeness, conflict and responsibility. The focus is depth and lasting change, not quick results.",
  },
  {
    q: 'Online or in person?',
    a: 'Both. Sessions take place online worldwide, or in person in Paphos and Vienna.',
  },
  {
    q: 'Which languages?',
    a: 'Sessions are available in English and German.',
  },
  {
    q: 'Do you work with international and binational couples?',
    a: 'Yes, often. Cultural differences, languages, and the isolation that can come with relocation are a frequent focus of the work.',
  },
  {
    q: 'How long does it take?',
    a: "There's no fixed timeline. Some people start with a few sessions to get clarity. Others choose ongoing work over several months for change that lasts. We talk it through in the first conversation.",
  },
  {
    q: 'Is it confidential?',
    a: 'Yes. Confidentiality is fundamental. It holds from the first contact and continues after the work ends. Nothing is shared with anyone.',
  },
  {
    q: 'What happens in the first conversation?',
    a: "A calm, low-pressure first talk: what brings you here, the patterns you're noticing, and whether this work fits you right now. There's no obligation to continue.",
  },
  {
    q: 'Can this save our relationship?',
    a: "I can't promise that, and it would be dishonest to try. My role isn't to tell you to stay or to leave. It's to help you see your wishes, your options and your responsibilities clearly, so you can make honest decisions you can stand behind.",
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
    <div className="border-b border-[#23201a]/12">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-[#23201a]/90 group-hover:text-[#23201a] transition-colors text-base sm:text-lg font-normal">
          {item.q}
        </span>
        <Plus
          className={`h-4 w-4 shrink-0 text-[#23201a]/50 transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
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
            <p className="pb-5 pr-8 max-w-3xl text-[#23201a]/70 text-sm sm:text-[15px] leading-[1.65]">
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
      className="bg-[#efe9de] px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24 md:py-28"
    >
      <div className="max-w-4xl mx-auto">
        <SectionLabel tone="ink" align="start" className="mb-5 sm:mb-6">
          Common questions
        </SectionLabel>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#23201a] mb-8 sm:mb-10 leading-[1.05]">
          Honest answers, before you reach out.
        </h2>

        <div className="border-t border-[#23201a]/12">
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
          <p className="text-[#23201a]/70 text-sm md:text-[15px] max-w-md leading-[1.65]">
            Still not sure whether this fits? The first conversation is the
            simplest way to find out.
          </p>
          <PrimaryCTA />
        </div>
      </div>
    </section>
  )
}
