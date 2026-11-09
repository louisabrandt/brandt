import SiteHeader from '../components/SiteHeader'
import FitFinder from '../sections/FitFinder'
import Courses from '../sections/Courses'
import CtaBand from '../sections/CtaBand'
import Footer from '../sections/Footer'

export default function CoursesPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#2E3A33] overflow-x-hidden">
        <FitFinder />
        <Courses />
        <CtaBand variant="courses" secondary="coaching" />
        <Footer />
      </main>
    </>
  )
}
