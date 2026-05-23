const interventions = [
  {
    pattern: 'Boredom Loop',
    signal: 'Frequent quick opens during idle time',
    intervention: '2-minute task or micro-challenge',
    goal: 'Replace passive checking with intentional action',
    icon: '😐',
    color: 'bg-amber-50 border-amber-200',
    badge: 'bg-amber-100 text-amber-700',
  },
  {
    pattern: 'Stress Escape',
    signal: 'High opens after negative mood check',
    intervention: 'Breathing reset or journal prompt',
    goal: 'Lower emotional reflex using, calm the nervous system',
    icon: '😰',
    color: 'bg-red-50 border-red-200',
    badge: 'bg-red-100 text-red-700',
  },
  {
    pattern: 'Validation Loop',
    signal: 'Long sessions with repeated social checking',
    intervention: 'Limit prompt and mood reflection',
    goal: 'Break compulsive checking, restore intentionality',
    icon: '🔄',
    color: 'bg-purple-50 border-purple-200',
    badge: 'bg-purple-100 text-purple-700',
  },
  {
    pattern: 'Bedtime Spiral',
    signal: 'Heavy use after 10 PM or near sleep goal',
    intervention: 'Wind-down mode with delay gate',
    goal: 'Protect sleep, establish evening boundaries',
    icon: '🌙',
    color: 'bg-indigo-50 border-indigo-200',
    badge: 'bg-indigo-100 text-indigo-700',
  },
]

import Reveal from './Reveal'

export default function InterventionTypes() {
  return (
    <section className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="fade-up">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Intelligent interventions for{' '}
            <span className="text-gradient">every situation</span>
          </h2>
          <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Different patterns need different responses. Our rules-based engine adapts to what
            you're actually experiencing — not just how long you've been scrolling.
          </p>
        </div>
        </Reveal>

        <Reveal variant="fade-up" delay={0.1}>
        <div className="max-w-5xl mx-auto">
          {interventions.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 p-5 lg:p-6 mb-4 rounded-xl border ${item.color} transition-all hover:shadow-md`}
            >
              {/* Pattern */}
              <div className="flex items-center gap-3 lg:w-1/4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="font-bold text-slate-900">{item.pattern}</div>
                  <div className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full mt-1 ${item.badge}`}>
                    {item.goal.split(',')[0]}
                  </div>
                </div>
              </div>

              {/* Signal */}
              <div className="lg:w-1/4">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Detection Signal</div>
                <p className="text-sm text-slate-600">{item.signal}</p>
              </div>

              {/* Intervention */}
              <div className="lg:w-1/4">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Intervention</div>
                <p className="text-sm font-semibold text-brand-600">{item.intervention}</p>
              </div>

              {/* Goal */}
              <div className="lg:w-1/4">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Goal</div>
                <p className="text-sm text-slate-600">{item.goal}</p>
              </div>
            </div>
          ))}
        </div>
        </Reveal>

        <Reveal variant="fade-in" delay={0.2}>
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-400">
            All interventions start rules-based and become personalized as the system learns your patterns.{' '}
            <a href="#features" className="text-brand-600 font-medium hover:text-brand-700 underline underline-offset-2">
              Learn about our approach →
            </a>
          </p>
        </div>
        </Reveal>
      </div>
    </section>
  )
}
