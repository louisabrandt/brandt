import Marquee from '../components/Marquee'

const ITEMS = [
  'Gottman Method',
  'Attachment theory',
  'Emotional regulation',
  'Sex therapy',
  'Sensate Focus',
  'Relational systems',
  'M.Sc. Psychology',
  'Confidential',
  'English & German',
  'Online & in person',
]

/** Thin trust/expertise band — method & credential keywords scrolling. */
export default function TrustBar() {
  return (
    <div className="bg-[#0a0a0a] py-6 sm:py-8 border-b border-primary/10">
      <Marquee items={ITEMS} direction="left" />
    </div>
  )
}
