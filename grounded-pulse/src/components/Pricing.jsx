import { useState } from 'react'
import Reveal from './Reveal'
import { PRICING_PLANS } from '../data/constants'

const ANNUAL_DISCOUNT = 0.15 // 15% off

function calculateAnnualPrice(monthlyPrice) {
  // Extract number from price string like '₹149'
  const num = parseInt(monthlyPrice.replace(/[^0-9]/g, ''), 10)
  if (isNaN(num)) return null
  const annualTotal = Math.round(num * 12 * (1 - ANNUAL_DISCOUNT))
  const annualMonthly = Math.round(annualTotal / 12)
  return { annualTotal, annualMonthly, saved: Math.round(num * 12 * ANNUAL_DISCOUNT) }
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false)
  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="fade-up">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1.5 text-sm font-medium text-brand-700 mb-6">
              Pricing
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Simple, transparent{' '}
              <span className="text-gradient">pricing</span>
            </h2>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Start free. Upgrade when you're ready for the full system. Annual plans available at
              15% discount.
            </p>

            {/* School pricing note */}
            <div className="mt-6 inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2">
              <span className="text-sm text-slate-500">
                🏫 Schools & coaching centers:{' '}
                <span className="font-semibold text-slate-700">Starting at ₹250/student/year</span>
              </span>
            </div>

            {/* Annual / Monthly toggle */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className={`text-sm font-medium ${!annual ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
              <button
                onClick={() => setAnnual(!annual)}
                className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${annual ? 'bg-brand-500' : 'bg-slate-200'}`}
                role="switch"
                aria-checked={annual}
                aria-label="Toggle annual pricing"
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300 ${annual ? 'translate-x-6' : ''}`}
                />
              </button>
              <span className={`text-sm font-medium ${annual ? 'text-slate-900' : 'text-slate-400'}`}>
                Annual{' '}
                <span className="text-brand-600 font-semibold">Save 15%</span>
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal variant="fade-up" delay={0.1}>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {PRICING_PLANS.map((plan, i) => (
              <div
                key={i}
                className={`relative bg-white border rounded-2xl p-6 lg:p-8 transition-all duration-300 ${
                  plan.popular
                    ? 'border-brand-200 shadow-xl shadow-brand-500/10 scale-105 lg:scale-110'
                    : 'border-slate-100 hover:shadow-lg hover:border-slate-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-500 to-deep-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className={plan.popular ? 'mt-4' : ''}>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                  </div>
                  <p className="text-sm text-slate-500 mb-4">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-slate-900">
                        {annual && plan.price !== '₹0'
                          ? `₹${calculateAnnualPrice(plan.price).annualMonthly}`
                          : plan.price}
                      </span>
                      <span className="text-sm text-slate-400">
                        {annual && plan.price !== '₹0' ? '/month billed annually' : plan.period}
                      </span>
                    </div>
                    {annual && plan.price !== '₹0' && (
                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-xs text-slate-400 line-through">
                          ₹{parseInt(plan.price.replace(/[^0-9]/g, ''), 10) * 12}/year
                        </span>
                        <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                          Save ₹{calculateAnnualPrice(plan.price).saved}/year
                        </span>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#waitlist"
                    className={`block text-center text-sm font-semibold py-3 rounded-xl transition-all active:scale-[0.97] ${
                      plan.popular
                        ? 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Annual discount note */}
        <Reveal variant="fade-in" delay={0.2}>
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-400">
              All prices in INR. Cancel anytime. Save 15% with annual billing.{' '}
              <button
                onClick={() => setAnnual(!annual)}
                className="text-brand-600 font-medium hover:text-brand-700 underline underline-offset-2 cursor-pointer"
              >
                {annual ? 'Switch to monthly' : 'View annual pricing'}
              </button>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
