import SiteHeader from '../components/SiteHeader'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#2E3A33] overflow-x-hidden">
        <Contact />
        <Footer />
      </main>
    </>
  )
}
