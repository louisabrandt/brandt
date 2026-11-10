import { m } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import { useContent } from '../i18n/content'

const EASE = [0.16, 1, 0.3, 1] as const

export default function Approach() {
  const c = useContent()
  return (
    <section
      id="approach"
      className="bg-[#F4F2EC] px-4 sm:px-6 md:px-10 lg:px-14 py-14 sm:py-24 md:py-28"
    >
      <div className="max-w-6xl mx-auto">
        {/* Rationale */}
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel tone="ink" className="mb-6">
            {c.approach.eyebrow}
          </SectionLabel>

          <m.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#1D211E] leading-[1.05]"
          >
            {c.approach.heading}
          </m.h2>

          <div className="mt-8 space-y-5 text-sm md:text-base leading-[1.7] text-[#1D211E]/75">
            <p>{c.approach.p1}</p>
            <p>{c.approach.p2}</p>
            <p className="text-[#1D211E]/90">{c.approach.p3}</p>
          </div>
        </div>

        {/* This is / this is not */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <Reveal index={0} className="rounded-2xl bg-[#ECEAE2] border border-[#1D211E]/8 p-6 md:p-8">
            <h3 className="text-[#1D211E] text-lg sm:text-xl font-medium">
              {c.approach.isTitle} <span className="font-serif italic">{c.approach.isTitleItalic}</span>
            </h3>
            <ul className="mt-5 space-y-3">
              {c.approach.isList.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 mt-0.5 shrink-0 text-[#5e6b4a]" strokeWidth={1.75} />
                  <span className="text-[#1D211E]/80 text-sm sm:text-base leading-[1.5]">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal index={1} className="rounded-2xl bg-[#efe4d6] border border-[#1D211E]/8 p-6 md:p-8">
            <h3 className="text-[#1D211E]/65 text-lg sm:text-xl font-medium">{c.approach.notTitle}</h3>
            <ul className="mt-5 space-y-3">
              {c.approach.notList.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 shrink-0 text-[#1D211E]/30 text-sm leading-none">{'×'}</span>
                  <span className="text-[#1D211E]/65 text-sm sm:text-base leading-[1.5]">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Concept pills + confidentiality */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {c.approach.concepts.map((concept) => (
            <span
              key={concept}
              className="rounded-full border border-[#1D211E]/15 bg-[#ECEAE2] px-4 py-2 text-xs text-[#1D211E]/85"
            >
              {concept}
            </span>
          ))}
        </div>

        <p className="mt-8 text-center text-[#1D211E]/65 text-xs">{c.approach.confidentiality}</p>
      </div>
    </section>
  )
}
