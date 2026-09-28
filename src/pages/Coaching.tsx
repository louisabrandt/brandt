import SiteHeader from '../components/SiteHeader'
import Services from '../sections/Services'
import WhatToExpect from '../sections/WhatToExpect'
import HowItWorks from '../sections/HowItWorks'
import WhatChanges from '../sections/WhatChanges'
import FAQ from '../sections/FAQ'
import Footer from '../sections/Footer'

export default function Coaching() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#0a0a0a] overflow-x-hidden">
        <Services />
        <WhatToExpect />
        <WhatChanges />
        <HowItWorks />
        <FAQ />
        <Footer />
      </main>
    </>
  )
}
