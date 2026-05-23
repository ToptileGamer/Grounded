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

          {/* Right visual — testimonial card */}
          <Reveal variant="fade-right" delay={0.1}>
          <div className="relative">
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-10 shadow-2xl">
              {/* Quote */}
              <svg className="w-8 h-8 text-white/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.166 11 15c0 1.933-1.567 3.5-3.5 3.5-1.271 0-2.402-.62-2.917-1.179zM15.583 17.321C14.553 16.227 14 15 14 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C20.591 11.69 22 13.166 22 15c0 1.933-1.567 3.5-3.5 3.5-1.271 0-2.402-.62-2.917-1.179z" />
              </svg>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                "I was spending 3+ hours on reels every night. I didn't need another screen time
                tracker — I needed something to stop me <em>in the moment.</em> Grounded Pulse's
                2-minute resets actually helped me build awareness. My focus score went from 40 to 78
                in two weeks."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-400 to-deep-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <div>
                  <div className="font-semibold text-white">Aarav K.</div>
                  <div className="text-sm text-white/50">Engineering student, Bengaluru</div>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-100 rounded-full blur-2xl -z-10" />
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
