import StickyHeader from './components/StickyHeader'
import Hero from './sections/Hero'
import TrustBar from './sections/TrustBar'
import About from './sections/About'
import WhyRelationalWork from './sections/WhyRelationalWork'
import ForWhom from './sections/ForWhom'
import Locations from './sections/Locations'
import Approach from './sections/Approach'
import WhatToExpect from './sections/WhatToExpect'
import Services from './sections/Services'
import WhatChanges from './sections/WhatChanges'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import HowItWorks from './sections/HowItWorks'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <StickyHeader />
      <main className="bg-[#0a0a0a] overflow-x-hidden">
        <Hero />
        <TrustBar />
        <About />
        <WhyRelationalWork />
        <ForWhom />
        <Locations />
        <Approach />
        <WhatToExpect />
        <Services />
        <WhatChanges />
        <Testimonials />
        <FAQ />
        <HowItWorks />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
