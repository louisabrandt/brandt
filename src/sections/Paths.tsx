import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import { TEXT_COLOR } from '../constants'

interface Path {
  to: string
  label: string
  title: string
  description: string
  image: string
  accent: string
}

const PATHS: Path[] = [
  {
    to: '/coaching',
    label: 'Work with me, one to one',
    title: 'Coaching',
    description:
      'Sessions for couples and individuals, guided by me, at a pace that works for you. Start with a calm first conversation.',
    image: '/illustrations/how-01-consultation.webp',
    accent: '#807e4d',
  },
  {
    to: '/courses',
    label: 'Go at your own pace',
    title: 'Courses',
    description:
      'Focused, evidence-based courses on the patterns that shape relationships. Take the short quiz to find the one that fits.',
    image: '/illustrations/finding-your-purpose.webp',
    accent: '#e39e25',
  },
]

export default function Paths() {
  return (
    <section className="bg-[#0a0a0a] px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24 md:py-28">
      <div className="max-w-6xl mx-auto">
        <SectionLabel align="start" className="mb-5 sm:mb-6">
          Two ways to begin
        </SectionLabel>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-primary max-w-3xl leading-[1.05] mb-12">
          However you&apos;d like to <span className="font-serif italic">start.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {PATHS.map((p, i) => (
            <Reveal key={p.to} index={i}>
              <Link
                to={p.to}
                className="group h-full rounded-2xl bg-[#101010] flex flex-col overflow-hidden hover:bg-[#141414] transition-colors"
              >
                <div
                  className="relative aspect-[16/9] overflow-hidden"
                  style={{ backgroundColor: p.accent }}
                >
                  <img
                    src={p.image}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <span className="text-primary/45 text-[10px] uppercase tracking-[0.16em]">
                    {p.label}
                  </span>
                  <h3
                    className="mt-2 text-2xl sm:text-3xl font-medium"
                    style={{ color: TEXT_COLOR }}
                  >
                    {p.title}
                  </h3>
                  <p className="mt-3 text-primary/70 text-sm sm:text-[15px] leading-[1.6] flex-1">
                    {p.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary/70 group-hover:text-primary transition-colors">
                    {p.title === 'Coaching' ? 'Explore coaching' : 'Explore courses'}
                    <ArrowUpRight
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.5}
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
