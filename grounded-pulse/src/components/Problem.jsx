const stats = [
  { value: '3 in 4', label: 'students spend >1hr/day on social media in class', source: 'OECD' },
  { value: '23%', label: 'of adolescents show smartphone addiction patterns', source: 'Indian adolescent study' },
  { value: '90 min', label: 'average unplanned scrolling per session', source: 'Internal research' },
  { value: '2x', label: 'higher depression risk among heavy social users', source: 'Peer-reviewed study' },
]

import Reveal from './Reveal'

export default function Problem() {
  return (
    <section id="problem" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-slate-900" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <Reveal variant="fade-up">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm font-medium text-white/60 mb-6">
            The Problem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Your phone isn't the problem.{' '}
            <span className="text-gradient">The loop is.</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            The average person doesn't decide to spend 90 minutes on reels. It happens through a
            chain of micro-actions — a notification, a quick check, a repeat open. That loop is
            what we break.
          </p>
        </div>
        </Reveal>

        {/* Stats grid */}
        <Reveal variant="fade-up" delay={0.15}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {stats.map((stat, i) => (
            <div key={i} className="relative bg-slate-800/50 p-8 lg:p-10">
              <div className="text-3xl lg:text-4xl font-extrabold text-white mb-2">{stat.value}</div>
              <p className="text-sm text-slate-400 leading-relaxed">{stat.label}</p>
              <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                — {stat.source}
              </div>
            </div>
          ))}
        </div>
        </Reveal>

        {/* The loop visualization */}
        <Reveal variant="scale" delay={0.2}>
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
            <h3 className="text-lg font-bold text-white mb-6 text-center">The Distraction Loop</h3>
            <div className="grid grid-cols-4 gap-4 lg:gap-6">
              {[
                { step: '01', label: 'Notification triggers a check', icon: '🔔' },
                { step: '02', label: 'Quick check becomes a scroll', icon: '📱' },
                { step: '03', label: 'Scroll extends into a loop', icon: '🔄' },
                { step: '04', label: 'Focus is lost for 20+ min', icon: '💨' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <div className="text-[10px] font-bold text-brand-400 mb-1">{item.step}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.label}</p>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 text-slate-600 text-lg">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
              <p className="text-sm text-red-300 text-center font-medium">
                Most "blocker" apps only treat step 1. Grounded Pulse interrupts the loop at every stage.
              </p>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  )
}
