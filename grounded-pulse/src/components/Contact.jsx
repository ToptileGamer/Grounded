import Reveal from './Reveal'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left info */}
          <div className="lg:col-span-2">
            <Reveal variant="fade-left">
              <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1.5 text-sm font-medium text-brand-700 mb-6">
                Contact Us
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
                Let's{' '}
                <span className="text-gradient">connect</span>
              </h2>
              <p className="text-base text-slate-500 leading-relaxed mb-8">
                Have a question about Grounded Pulse? Want to partner with us or bring the
                platform to your school? We'd love to hear from you.
              </p>

              <div className="space-y-5">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    ),
                    title: 'Email',
                    value: 'hello@groundedpulse.com',
                    href: 'mailto:hello@groundedpulse.com',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    ),
                    title: 'Location',
                    value: 'Bengaluru, India',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: 'Response Time',
                    value: 'Within 24 hours',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs font-medium text-slate-400">{item.title}</div>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-medium text-slate-900 hover:text-brand-600 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm font-medium text-slate-900">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Follow us</div>
                <div className="flex gap-3">
                  {['Twitter', 'Instagram', 'LinkedIn'].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="text-xs font-medium text-slate-500 hover:text-slate-900 bg-white border border-slate-200 rounded-lg px-3 py-1.5 transition-all hover:border-slate-300"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3">
            <Reveal variant="fade-right" delay={0.1}>
              <div className="bg-white border border-slate-100 rounded-2xl p-6 lg:p-8 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-1">Send us a message</h3>
                <p className="text-sm text-slate-500 mb-6">
                  Fill out the form and we'll get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
