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
          </div>
          </div>
    </section>
  )
}

