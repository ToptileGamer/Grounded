import Reveal from './Reveal'

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32 bg-slate-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-brand-950/20 to-slate-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal variant="fade-up">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm font-medium text-white/60 mb-6">
            Early Access
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Ready to{' '}
            <span className="text-gradient">break the loop?</span>
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl mx-auto">
            Join 200+ students who are already on the waitlist. Be the first to get access when
            we launch.
          </p>

          {/* Email signup */}
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-sm"
              />
              <button className="px-6 py-3.5 bg-gradient-to-r from-brand-500 to-deep-500 text-white font-semibold rounded-xl hover:from-brand-600 hover:to-deep-600 transition-all hover:shadow-xl active:scale-[0.97] text-sm whitespace-nowrap">
                Join Waitlist
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              No spam. Unsubscribe anytime. We'll notify you when we launch.
            </p>
          </div>

          {/* Bottom features */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Privacy-first
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              Free to start
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              No commitment
            </span>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  )
}
