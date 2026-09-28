import Marquee from '../components/Marquee'
import { useContent } from '../i18n/content'

/** Thin trust/expertise band — method & credential keywords scrolling. */
export default function TrustBar() {
  const c = useContent()
  return (
    <div className="bg-[#0a0a0a] py-6 sm:py-8 border-b border-primary/10">
      <Marquee items={c.trustBar} direction="left" />
    </div>
  )
}
