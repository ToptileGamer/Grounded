const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#' },
  ],
  'For Users': [
    { label: 'For Students', href: '#for-students' },
    { label: 'For Parents', href: '#for-parents' },
    { label: 'For Schools', href: '#for-schools' },
    { label: 'Waitlist', href: '#pricing' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ],
  Support: [
    { label: 'Help Center', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Status', href: '#' },
    { label: 'Feedback', href: '#' },
  ],
}

const socialLinks = [
  { label: 'Twitter', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 group mb-4">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-400 to-deep-500 rounded-lg rotate-45" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-base text-white">Grounded</span>
                <span className="text-[10px] font-semibold text-slate-500 tracking-widest uppercase -mt-0.5">Pulse</span>
              </div>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs mb-6">
              Your attention immune system. Building healthier digital habits through adaptive
              friction, focus tools, and mood-aware interventions.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-500 hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  <span className="text-xs font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Grounded Pulse. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-slate-700">·</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="text-slate-700">·</span>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
