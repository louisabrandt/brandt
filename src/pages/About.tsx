import SiteHeader from '../components/SiteHeader'
import About from '../sections/About'
import Approach from '../sections/Approach'
import RelationalCapacity from '../sections/RelationalCapacity'
import CtaBand from '../sections/CtaBand'
import Footer from '../sections/Footer'

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#0a0a0a] overflow-x-hidden">
        <About />
        <Approach />
        <RelationalCapacity />
        <CtaBand
          heading="Ready to understand your patterns?"
          text="The first conversation is a calm, no-pressure way to see whether this work fits. No obligation, and confidential from the very first message."
          secondaryLabel="Explore the courses"
          secondaryTo="/courses"
        />
        <Footer />
      </main>
    </>
  )
}
