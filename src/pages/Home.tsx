import StickyHeader from '../components/StickyHeader'
import Hero from '../sections/Hero'
import TrustBar from '../sections/TrustBar'
import ForWhom from '../sections/ForWhom'
import ApproachTeaser from '../sections/ApproachTeaser'
import Testimonials from '../sections/Testimonials'
import Paths from '../sections/Paths'
import CtaBand from '../sections/CtaBand'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <>
      <StickyHeader />
      <main className="bg-[#0a0a0a] overflow-x-hidden">
        <Hero />
        <TrustBar />
        <ForWhom />
        <ApproachTeaser />
        <Testimonials />
        <Paths />
        <CtaBand
          secondaryLabel="Explore the courses"
          secondaryTo="/courses"
        />
        <Footer />
      </main>
    </>
  )
}
