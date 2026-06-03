import { useState, useEffect } from 'react'
import ErrorBoundary from './components/utils/ErrorBoundary'
import SkipLink from './components/utils/SkipLink'
import LoadingScreen from './components/utils/LoadingScreen'
import BackToTop from './components/utils/BackToTop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import InterventionTypes from './components/InterventionTypes'
import ForStudents from './components/ForStudents'
import ForParents from './components/ForParents'
import ForSchools from './components/ForSchools'
import Metrics from './components/Metrics'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import CTA from './components/CTA'
import Footer from './components/Footer'

function AppContent() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Brief loading state to prevent flash-of-content on initial render
    const timer = setTimeout(() => setLoading(false), 50)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="relative overflow-hidden">
      <SkipLink />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <InterventionTypes />
        <ForStudents />
        <ForParents />
        <ForSchools />
        <Metrics />
        <Pricing />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
      <AppContent />
    </ErrorBoundary>
  )
}
