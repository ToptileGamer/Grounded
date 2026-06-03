import { useRef, useEffect } from 'react'
import { motion, useInView, animate, useMotionValue, useTransform } from 'framer-motion'
import Reveal from './Reveal'
import { METRICS_DATA } from '../data/constants'

function AnimatedMetric({ value, label, suffix, prefix, note }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
      })
      return controls.stop
    }
  }, [isInView])

  return (
    <div className="group">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 transition-colors">
        <div ref={ref} className="text-3xl lg:text-5xl font-extrabold text-white mb-2">
          {prefix}
          <motion.span>{rounded}</motion.span>
          {suffix}
        </div>
        <p className="text-sm text-slate-400 leading-relaxed">{label}</p>
        {note && (
          <div className="mt-2 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
            {note}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Metrics() {
  return (
    <section className="relative py-24 lg:py-32 bg-slate-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Decorative gradient blobs */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-deep-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal variant="fade-up">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Real results from{' '}
              <span className="text-gradient">early users</span>
            </h2>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed">
              We measure what matters — behavior change, not vanity metrics.
            </p>
          </div>
        </Reveal>

        <Reveal variant="fade-up" delay={0.1}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {METRICS_DATA.map((metric, i) => (
              <AnimatedMetric key={i} {...metric} />
            ))}
          </div>
        </Reveal>

        {/* Target KPIs */}
        <Reveal variant="scale" delay={0.2}>
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
              <h3 className="text-lg font-bold text-white mb-6">What we're tracking</h3>
              <div className="grid sm:grid-cols-3 gap-4 text-left">
                {[
                  { label: 'D7 Retention', target: '>40%' },
                  { label: 'Weekly Focus Sessions', target: '>5 per user' },
                  { label: 'Bedtime Intervention Rate', target: '>50%' },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-4">
                    <div className="text-xs text-slate-500 font-medium mb-1">{item.label}</div>
                    <div className="text-2xl font-bold text-white">{item.target}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
