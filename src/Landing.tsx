import StickyHeader from './components/StickyHeader'
import Hero from './sections/Hero'
import TrustBar from './sections/TrustBar'
import ForWhom from './sections/ForWhom'
import About from './sections/About'
import Approach from './sections/Approach'
import RelationalCapacity from './sections/RelationalCapacity'
import WhatToExpect from './sections/WhatToExpect'
import Testimonials from './sections/Testimonials'
import Services from './sections/Services'
import FitFinder from './sections/FitFinder'
import Courses from './sections/Courses'
import WhatChanges from './sections/WhatChanges'
import HowItWorks from './sections/HowItWorks'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function Landing() {
  return (
    <>
      <StickyHeader />
      <main className="bg-[#0a0a0a] overflow-x-hidden">
        {/* Arrival */}
        <Hero />
        <TrustBar />
        {/* Recognition → trust → method */}
        <ForWhom />
        <About />
        <Approach />
        {/* Depth of the method */}
        <RelationalCapacity />
        <WhatToExpect />
        {/* Proof, then the ways to work */}
        <Testimonials />
        <Services />
        <FitFinder />
        <Courses />
        {/* Outcome → getting started → objections → contact */}
        <WhatChanges />
        <HowItWorks />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
