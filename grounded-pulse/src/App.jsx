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
import Contact from './components/Contact'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <main>
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
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
