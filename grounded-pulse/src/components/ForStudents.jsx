import Reveal from './Reveal'

export default function ForStudents() {
  return (
    <section id="for-students" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <Reveal variant="fade-left">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1.5 text-sm font-medium text-brand-700 mb-6">
              For Students
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
              Stay focused without{' '}
              <span className="text-gradient">giving up your social life</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed mb-8">
              You know your phone is hurting your focus. But deleting Instagram feels impossible —
              and honestly, you shouldn't have to. Grounded Pulse works with your apps, not against
              them. It just adds a moment of intention before the scroll.
            </p>

            <div className="space-y-4">
              {[
                { icon: '🎯', title: 'Better focus during study sessions', desc: 'Fewer interruptions, deeper concentration' },
                { icon: '🌙', title: 'Protect your sleep', desc: 'Wind-down mode helps you log off before midnight' },
                { icon: '📈', title: 'See real improvement', desc: 'Track focus streaks and distraction scores, not just screen time' },
                { icon: '🔒', title: 'No one sees your data', desc: 'Privacy-first. Parents only see what you allow.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0 text-lg">
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

          {/* Right visual - Student Focus Dashboard */}
          <Reveal variant="fade-right" delay={0.1}>
          <div className="relative">
            <div className="relative bg-white border border-slate-100 rounded-2xl p-6 lg:p-8 shadow-xl">
              {/* Phone frame */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full" />
                  <span className="w-2 h-2 bg-amber-400 rounded-full" />
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                </div>
                <span className="text-[10px] font-medium text-slate-400">Student Dashboard</span>
                <div className="w-5 h-5 bg-slate-900 rounded-md flex items-center justify-center">
                  <span className="text-white text-[8px] font-bold">G</span>
                </div>
              </div>

              {/* Focus streak */}
              <div className="bg-gradient-to-br from-brand-500 to-deep-600 rounded-xl p-5 mb-4 text-white">
                <div className="text-xs text-white/70 font-medium mb-1">Current Streak</div>
                <div className="text-3xl font-extrabold">7 days</div>
                <div className="flex items-center gap-1 mt-2">
                  {[true, true, true, true, true, true, false].map((active, i) => (
                    <div
                      key={i}
                      className={`w-6 h-1 rounded-full ${active ? 'bg-white' : 'bg-white/20'}`}
                    />
                  ))}
                </div>
                <p className="text-xs text-white/60 mt-2">One more day to beat your record!</p>
              </div>

              {/* Today's focus */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-slate-700">Today's Focus</span>
                  <span className="text-xs font-bold text-brand-600">3h 42m</span>
                </div>
                <div className="space-y-2">
                  {[
                    { subject: 'Mathematics', time: '1h 30m', pct: 60, color: 'bg-brand-400' },
                    { subject: 'Physics', time: '1h 12m', pct: 45, color: 'bg-deep-400' },
                    { subject: 'English', time: '1h 00m', pct: 35, color: 'bg-purple-400' },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between text-xs mb-0.5">
                        <span className="text-slate-600 font-medium">{item.subject}</span>
                        <span className="text-slate-400">{item.time}</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Distraction alert */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-3">
                <span className="text-lg">🧘</span>
                <div>
                  <div className="text-xs font-semibold text-amber-800">Quick Reset Available</div>
                  <p className="text-[11px] text-amber-700">You've been studying for 3+ hours. Take a 2-min breathing break?</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-100 rounded-full blur-2xl -z-10" />
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

