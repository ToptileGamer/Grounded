import Reveal from './Reveal'

export default function ForSchools() {
  return (
    <section id="for-schools" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <Reveal variant="fade-left">
          <div>
            <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-1.5 text-sm font-medium text-purple-700 mb-6">
              For Schools & Coaching Centers
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
              Reduce classroom distraction{' '}
              <span className="text-gradient">without punishment</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed mb-8">
              Nearly 1 in 3 students report being distracted by digital devices in class. Grounded
              Pulse gives schools a privacy-safe way to understand and reduce the problem — at the
              cohort level, not the individual level.
            </p>

            <div className="space-y-4">
              {[
                { icon: '📈', title: 'Cohort-level focus insights', desc: 'Aggregate trends without accessing any individual student\'s data' },
                { icon: '🎓', title: 'Better learning outcomes', desc: 'Reduced distraction correlates with improved academic performance' },
                { icon: '🔐', title: 'Privacy-safe by design', desc: 'No raw content, no individual surveillance — only aggregate, authorized views' },
                { icon: '📋', title: 'Customizable dashboards', desc: 'Exportable reports for administration, parents, and accreditation' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0 text-lg">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{item.title}</div>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-5 py-3">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-sm text-slate-600">
                Starting at <span className="font-bold text-slate-900">₹250/student/year</span> for pilot programs
              </span>
            </div>
          </div>
          </Reveal>

          {/* Right visual */}
          <Reveal variant="fade-right" delay={0.1}>
          <div className="relative">
            <div className="relative bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 lg:p-10 shadow-2xl">
              <h3 className="text-white font-bold text-lg mb-6">School Dashboard Preview</h3>

              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-purple-200">Cohort Focus Score</span>
                    <span className="text-white font-bold">72%</span>
                  </div>
                  <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-[72%] h-full bg-white/40 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-purple-200">Late-Night Usage Risk</span>
                    <span className="text-white font-bold">23% ↓</span>
                  </div>
                  <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-[23%] h-full bg-amber-400/60 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-purple-200">Intervention Success Rate</span>
                    <span className="text-white font-bold">65%</span>
                  </div>
                  <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-[65%] h-full bg-green-400/60 rounded-full" />
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-4 mt-4">
                  <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">Key Insight</div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Classes using Grounded Pulse show 34% fewer classroom phone checks and
                    28% higher self-reported focus during study hours.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-100 rounded-full blur-2xl -z-10" />
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
