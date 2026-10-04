import { MotionConfig } from 'framer-motion'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './i18n/lang'
import ScrollToTop from './components/ScrollToTop'
import Analytics from './components/Analytics'
import Home from './pages/Home'
import AboutPage from './pages/About'
import Coaching from './pages/Coaching'
import CoursesPage from './pages/CoursesPage'
import ContactPage from './pages/ContactPage'
import CourseDetail from './pages/CourseDetail'

export default function App() {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <ScrollToTop />
        <Analytics />
        <Routes>
          {/* German (default) */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* English */}
          <Route path="/en" element={<Home />} />
          <Route path="/en/about" element={<AboutPage />} />
          <Route path="/en/coaching" element={<Coaching />} />
          <Route path="/en/courses" element={<CoursesPage />} />
          <Route path="/en/courses/:slug" element={<CourseDetail />} />
          <Route path="/en/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MotionConfig>
    </LanguageProvider>
  )
}
