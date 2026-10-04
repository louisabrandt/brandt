import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import PrimaryCTA from '../components/PrimaryCTA'
import { useContent } from '../i18n/content'

interface QA {
  q: string
  a: string
}

function FaqItem({ item, isOpen, onToggle }: { item: QA; isOpen: boolean; onToggle: () => void }) {
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
          className={`h-4 w-4 shrink-0 text-[#23201a]/65 transition-transform duration-300 ${
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
  const c = useContent()
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section
      id="faq"
      className="bg-[#efe9de] px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24 md:py-28"
    >
      <div className="max-w-4xl mx-auto">
        <SectionLabel tone="ink" align="start" className="mb-5 sm:mb-6">
          {c.faq.eyebrow}
        </SectionLabel>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#23201a] mb-8 sm:mb-10 leading-[1.05]">
          {c.faq.heading}
        </h2>

        <div className="border-t border-[#23201a]/12">
          {c.faq.items.map((item, i) => (
            <FaqItem key={item.q} item={item} isOpen={open === i} onToggle={() => setOpen(open === i ? null : i)} />
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[#23201a]/70 text-sm md:text-[15px] max-w-md leading-[1.65]">{c.faq.softClose}</p>
          <PrimaryCTA />
        </div>
      </div>
    </section>
  )
}
