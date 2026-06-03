import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'
import { FAQ_DATA } from '../data/constants'

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="border border-slate-100 rounded-xl overflow-hidden transition-all duration-200 hover:border-slate-200">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold text-slate-900 leading-relaxed pr-4">{faq.q}</span>
        <svg
          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-5 pt-0">
              <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="fade-up">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1.5 text-sm font-medium text-brand-700 mb-6">
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Frequently asked{' '}
              <span className="text-gradient">questions</span>
            </h2>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about Grounded Pulse. Can't find what you're looking for?{' '}
              <a href="#contact" className="text-brand-600 font-medium hover:text-brand-700 underline underline-offset-2">
                Contact us
              </a>.
            </p>
          </div>
        </Reveal>

        <Reveal variant="fade-up" delay={0.1}>
          <div className="max-w-3xl mx-auto space-y-3">
            {FAQ_DATA.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onClick={() => toggle(i)}
              />
            ))}
          </div>
        </Reveal>

        {/* Still have questions */}
        <Reveal variant="scale" delay={0.15}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-6 py-4">
              <span className="text-2xl">💬</span>
              <div className="text-left">
                <div className="text-sm font-semibold text-slate-900">Still have questions?</div>
                <p className="text-xs text-slate-500">
                  Reach out at{' '}
                  <a href="mailto:hayzentechsolutions@gmail.com" className="text-brand-600 font-medium hover:text-brand-700">
                    hayzentechsolutions@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
