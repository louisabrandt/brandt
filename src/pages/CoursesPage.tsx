import SiteHeader from '../components/SiteHeader'
import FitFinder from '../sections/FitFinder'
import Courses from '../sections/Courses'
import CtaBand from '../sections/CtaBand'
import Footer from '../sections/Footer'

export default function CoursesPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#0a0a0a] overflow-x-hidden">
        <FitFinder />
        <Courses />
        <CtaBand
          heading="Would you rather work one to one?"
          text="If a course isn't quite the right shape, a first conversation is a calm way to find the support that fits. No obligation, always confidential."
          secondaryLabel="Explore coaching"
          secondaryTo="/coaching"
        />
        <Footer />
      </main>
    </>
  )
}
