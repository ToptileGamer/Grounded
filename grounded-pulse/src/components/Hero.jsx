import Reveal from './Reveal'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 lg:pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50/40 via-white to-white" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Decorative blobs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-40 right-1/4 w-[30rem] h-[30rem] bg-deep-200/20 rounded-full blur-3xl animate-float" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1.5 text-sm font-medium text-brand-700 animate-fade-in-up">
              <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
              Digital Wellbeing for a Focused Life
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight animate-fade-in-up-delay-1">
              Your{' '}
              <span className="text-gradient">attention immune system</span>
              {' '}for a healthier digital life
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-xl animate-fade-in-up-delay-2">
              Grounded Pulse detects when you're drifting into compulsive social-media loops and
              gently redirects you — without blocking, without shaming, without surveillance.
            </p>

            {/* CTA buttons */}
            <Reveal variant="fade-up" delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 bg-slate-900 text-white text-base font-semibold px-7 py-3.5 rounded-xl hover:bg-slate-800 transition-all hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.97]"
              >
                Join the Waitlist
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 text-base font-semibold px-7 py-3.5 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all hover:shadow-lg active:scale-[0.97]"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                See How It Works
              </a>
            </div>
            </Reveal>

            {/* Social proof */}
            <Reveal variant="fade-up" delay={0.4}>
            <div className="flex items-center gap-3 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-300 to-deep-400 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold"
                  >
                    {['A', 'M', 'K', 'R'][i - 1]}
                  </div>
                ))}
              </div>
              <div className="text-sm text-slate-400">
                <span className="font-semibold text-slate-600">200+</span> students already waiting
              </div>
            </div>
            </Reveal>
          </div>

          {/* Right visual */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Main card */}
              <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 glow">
                {/* Card header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-400 to-deep-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">G</span>
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-900">Grounded Pulse</div>
                      <div className="text-[10px] text-slate-400 font-medium">FOCUS MODE</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    Active
                  </div>
                </div>

                {/* Focus session */}
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-slate-700">Focus Session</span>
                    <span className="text-xs text-brand-600 font-medium bg-brand-50 px-2 py-0.5 rounded-full">25:00</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="w-3/5 h-full bg-gradient-to-r from-brand-400 to-brand-500 rounded-full" />
                  </div>
                  <div className="flex justify-between text-xs text-slate-400 mt-1.5">
                    <span>15:32 elapsed</span>
                    <span>Study Mathematics</span>
                  </div>
                </div>

                {/* Intervention alert */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-amber-800">Reopen detected</div>
                      <div className="text-xs text-amber-700 mt-0.5">You've opened Instagram 3 times in 5 minutes. Take a breath?</div>
                    </div>
                  </div>
                </div>

                {/* Quick actions */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-brand-500 text-white text-xs font-semibold py-2.5 rounded-lg hover:bg-brand-600 transition-colors">
                    2-Min Reset
                  </button>
                  <button className="flex-1 bg-slate-100 text-slate-600 text-xs font-semibold py-2.5 rounded-lg hover:bg-slate-200 transition-colors">
                    Journal
                  </button>
                  <button className="flex-1 bg-slate-100 text-slate-600 text-xs font-semibold py-2.5 rounded-lg hover:bg-slate-200 transition-colors">
                    Dismiss
                  </button>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-brand-100 rounded-full blur-xl opacity-60" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-deep-100 rounded-full blur-xl opacity-60" />
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
          <div className="flex flex-col items-center gap-2 text-slate-300">
            <span className="text-xs font-medium">Scroll to explore</span>
            <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
