import Reveal from './Reveal'

const plans = [
  {
    name: 'Free',
    price: '₹0',
    period: 'forever',
    description: 'Get started with basic focus tools',
    features: [
      'Focus timer with basic sessions',
      'Daily distraction summary',
      'Up to 5 nudges per day',
      'Basic mood check-ins',
    ],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Premium',
    price: '₹149',
    period: '/month',
    description: 'Full behavior change system for individuals',
    features: [
      'Unlimited focus sessions',
      'Adaptive friction engine',
      'Bedtime protection mode',
      'Weekly distraction profile reports',
      'Mood-aware interventions',
      'Accountability partner (coming soon)',
    ],
    cta: 'Join Waitlist',
    popular: true,
  },
  {
    name: 'Family',
    price: '₹299',
    period: '/month',
    description: 'For parents and teens together',
    features: [
      'Everything in Premium × 4 accounts',
      'Parent dashboard with trend summaries',
      'Consent-based accountability linking',
      'Shared goals and streaks',
      'Family progress reports',
      'Priority support',
    ],
    cta: 'Join Waitlist',
    popular: false,
  },
]

export default function Pricing() {
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
        </div>
        </Reveal>

        <Reveal variant="fade-up" delay={0.1}>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
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

              <div className={`${plan.popular ? 'mt-4' : ''}`}>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                </div>
                <p className="text-sm text-slate-500 mb-4">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                    <span className="text-sm text-slate-400">{plan.period}</span>
                  </div>
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
                  href="#"
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
            Annual plans available at 15% discount. All prices in INR. Cancel anytime.{' '}
            <a href="#" className="text-brand-600 font-medium hover:text-brand-700 underline underline-offset-2">
              View annual pricing
            </a>
          </p>
        </div>
        </Reveal>
      </div>
    </section>
  )
}
