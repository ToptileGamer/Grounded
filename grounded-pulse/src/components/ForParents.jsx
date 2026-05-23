import Reveal from './Reveal'

export default function ForParents() {
  return (
    <section id="for-parents" className="relative py-24 lg:py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left visual */}
          <Reveal variant="fade-left">
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-white border border-slate-100 rounded-2xl p-6 lg:p-8 shadow-xl">
              {/* Dashboard mockup */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full" />
                  <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                </div>
                <span className="text-[10px] font-medium text-slate-400">Parent Dashboard</span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-slate-600">Focus Score (Weekly)</span>
                    <span className="text-sm font-bold text-brand-600">76 ↑</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-gradient-to-r from-brand-400 to-brand-500 rounded-full" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Bedtime</div>
                    <div className="text-lg font-bold text-slate-900">11:15 PM</div>
                    <div className="text-xs text-green-600 font-medium">25 min improvement</div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Interventions</div>
                    <div className="text-lg font-bold text-slate-900">18</div>
                    <div className="text-xs text-green-600 font-medium">62% acceptance rate</div>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-semibold text-amber-800">Noticeable improvement</span>
                  </div>
                  <p className="text-xs text-amber-700">
                    Late-night phone use is down 40% compared to last month.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-deep-100 rounded-full blur-2xl -z-10" />
          </div>
          </Reveal>

          {/* Right content */}
          <Reveal variant="fade-right" delay={0.1}>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-deep-50 border border-deep-200 rounded-full px-4 py-1.5 text-sm font-medium text-deep-700 mb-6">
              For Parents
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
              Help your teen build healthier habits{' '}
              <span className="text-gradient">without spying on them</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed mb-8">
              You want to help — but constant monitoring destroys trust. Grounded Pulse gives you
              meaningful insights without raw surveillance. Your teen stays in control while you see
              the trends that matter.
            </p>

            <div className="space-y-4">
              {[
                { icon: '📊', title: 'Trend summaries, not raw data', desc: 'See focus scores and sleep patterns, not individual app usage' },
                { icon: '🤝', title: 'Consent-based accountability', desc: 'Your teen decides what to share. No secrets, no surveillance.' },
                { icon: '💬', title: 'Support, not conflict', desc: 'Replace "put down your phone" with shared goals and encouragement' },
                { icon: '🏆', title: 'Celebrate progress together', desc: 'Streaks, improvement badges, and shared wins' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-deep-50 rounded-xl flex items-center justify-center flex-shrink-0 text-lg">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{item.title}</div>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
