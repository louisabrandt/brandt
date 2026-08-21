import { Asterisk } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import { CITIES } from '../constants'

export default function Locations() {
  return (
    <section
      id="locations"
      className="bg-[#0a0a0a] px-4 sm:px-6 md:px-10 lg:px-14 py-16 sm:py-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <SectionLabel className="mb-6">Where we meet</SectionLabel>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-primary max-w-2xl mx-auto leading-[1.15]">
          Online worldwide — and in person in five cities.
        </h2>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {CITIES.map((city) => (
            <span
              key={city}
              className="liquid-glass flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-primary/85"
            >
              <Asterisk
                className="h-3 w-3 shrink-0 text-primary/60"
                strokeWidth={1.5}
              />
              {city}
            </span>
          ))}
        </div>

        <p className="mt-6 text-primary/50 text-xs">
          Sessions in English &amp; German.
        </p>
      </div>
    </section>
  )
}
