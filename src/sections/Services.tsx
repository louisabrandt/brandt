import { Check } from 'lucide-react'
import WordsPullUpMultiStyle, { type Segment } from '../components/WordsPullUpMultiStyle'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import PrimaryCTA from '../components/PrimaryCTA'
import { TEXT_COLOR } from '../constants'
import { useContent } from '../i18n/content'

interface Offering {
  number: string
  title: string
  tagline: string
  description: string
  meta: string
  price: string
}

function OfferingBody({ offering, tone }: { offering: Offering; tone: 'dark' | 'paper' }) {
  const title = tone === 'paper' ? 'text-[#23201a]' : ''
  const tagline = tone === 'paper' ? 'text-[#23201a]/60' : 'text-primary/60'
  const desc = tone === 'paper' ? 'text-[#23201a]/75' : 'text-primary/70'
  const meta = tone === 'paper' ? 'text-[#23201a]/45' : 'text-primary/45'
  const price = tone === 'paper' ? 'text-[#23201a]' : 'text-primary'
  return (
    <>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3
            className={`text-lg font-medium ${title}`}
            style={tone === 'dark' ? { color: TEXT_COLOR } : undefined}
          >
            {offering.title}
          </h3>
          <p className={`mt-1 text-xs sm:text-sm font-serif italic ${tagline}`}>{offering.tagline}</p>
        </div>
        <span className={`shrink-0 text-sm font-medium tabular-nums ${price}`}>{offering.price}</span>
      </div>
      <p className={`mt-3 text-[13px] sm:text-sm leading-[1.6] flex-1 ${desc}`}>{offering.description}</p>
      <p className={`mt-4 text-xs tracking-wide ${meta}`}>{offering.meta}</p>
    </>
  )
}

export default function Services() {
  const c = useContent()
  const header: Segment[] = [
    { text: c.services.head1, className: 'text-[#23201a]' },
    { text: c.services.head2, className: 'text-[#23201a]/45' },
  ]

  return (
    <section
      id="services"
      className="bg-[#efe9de] px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24 md:py-28"
    >
      <div className="max-w-6xl mx-auto">
        <SectionLabel tone="ink" align="start" className="mb-5 sm:mb-6">
          {c.services.eyebrow}
        </SectionLabel>

        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal max-w-3xl mb-12">
          <WordsPullUpMultiStyle segments={header} className="!justify-start text-left" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {/* Free intro call — featured dark accent card */}
          <Reveal
            index={0}
            className="noise-overlay relative overflow-hidden rounded-2xl bg-[#1b1b1b] ring-1 ring-[#B4552E]/40 p-6 md:p-8 flex flex-col md:col-span-2 min-h-[260px]"
          >
            <span className="self-start text-[10px] uppercase tracking-[0.18em] text-[#F3ECDE] bg-[#B4552E] rounded-full px-2.5 py-1">
              {c.services.featured.price}
            </span>
            <h3 className="mt-5 text-xl font-medium" style={{ color: TEXT_COLOR }}>
              {c.services.featured.title}
            </h3>
            <p className="mt-1 text-primary/60 text-xs sm:text-sm font-serif italic">
              {c.services.featured.tagline}
            </p>
            <p className="mt-3 text-primary/70 text-[13px] sm:text-sm leading-[1.6] flex-1">
              {c.services.featured.description}
            </p>

            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {c.services.included.map((item) => (
                <li key={item} className="flex items-center gap-1.5 text-primary/75 text-xs sm:text-[13px]">
                  <Check className="h-3.5 w-3.5 text-[#5e6b4a]" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-2">
              <PrimaryCTA label={c.services.cta} />
              <span className="text-primary/45 text-[11px]">{c.services.trust}</span>
            </div>
          </Reveal>

          {/* Sessions & formats — light surface cards */}
          {c.services.offerings.map((o, i) => (
            <Reveal
              key={o.number}
              index={i + 1}
              className="rounded-2xl bg-[#f5f0e6] border border-[#23201a]/8 p-6 flex flex-col min-h-[240px]"
            >
              <span className="text-[#23201a]/40 text-xs tabular-nums">{o.number}</span>
              <div className="mt-3 flex flex-col flex-1">
                <OfferingBody offering={o} tone="paper" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Price reference + VAT note */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[#23201a]/45 text-[11px] uppercase tracking-[0.18em]">
              {c.services.priceLabel}
            </span>
            {c.services.pricing.map((p) => (
              <span
                key={p}
                className="rounded-full border border-[#23201a]/15 bg-[#f5f0e6] px-4 py-2 text-[13px] text-[#23201a]/85 tabular-nums"
              >
                {p}
              </span>
            ))}
          </div>
          <p className="text-[#23201a]/45 text-xs">{c.services.pricingNote}</p>
        </div>
      </div>
    </section>
  )
}
