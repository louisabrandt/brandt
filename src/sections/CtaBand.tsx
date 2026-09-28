import PrimaryCTA from '../components/PrimaryCTA'
import SecondaryCTA from '../components/SecondaryCTA'

interface CtaBandProps {
  heading?: string
  text?: string
  tone?: 'paper' | 'dark'
  /** Optional second, lower-emphasis action. */
  secondaryLabel?: string
  secondaryTo?: string
}

/** A calm closing call-to-action band, reused at the foot of several pages. */
export default function CtaBand({
  heading = 'Not sure where to start?',
  text = 'The first conversation is a calm, no-pressure way to see whether this work fits. No obligation, and confidential from the very first message.',
  tone = 'paper',
  secondaryLabel,
  secondaryTo,
}: CtaBandProps) {
  const isPaper = tone === 'paper'
  const bg = isPaper ? 'bg-[#efe9de]' : 'bg-[#0a0a0a]'
  const head = isPaper ? 'text-[#23201a]' : 'text-primary'
  const body = isPaper ? 'text-[#23201a]/70' : 'text-primary/70'

  return (
    <section className={`${bg} px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24`}>
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-normal leading-[1.1] ${head}`}
        >
          {heading}
        </h2>
        <p className={`mt-5 max-w-xl mx-auto text-sm md:text-[15px] leading-[1.7] ${body}`}>
          {text}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <PrimaryCTA />
          {secondaryLabel && secondaryTo && (
            <SecondaryCTA
              label={secondaryLabel}
              to={secondaryTo}
              tone={isPaper ? 'paper' : 'dark'}
            />
          )}
        </div>
      </div>
    </section>
  )
}
