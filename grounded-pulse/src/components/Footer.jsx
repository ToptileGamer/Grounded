import { FOOTER_LINKS, SOCIAL_LINKS, SITE_NAME } from '../data/constants'
import LegalOverlay from './utils/LegalOverlay'
import { useState } from 'react'

export default function Footer() {
  const [legal, setLegal] = useState(null) // 'privacy' | 'terms' | 'cookies' | null
  return (
    <footer className="relative bg-slate-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 group mb-4" aria-label="Grounded Pulse Home">
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
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-white transition-colors text-sm"
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map(({ category, links }) => (
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
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <button onClick={() => setLegal('privacy')} className="hover:text-white transition-colors cursor-pointer">Privacy Policy</button>
            <span className="text-slate-700">·</span>
            <button onClick={() => setLegal('terms')} className="hover:text-white transition-colors cursor-pointer">Terms of Service</button>
            <span className="text-slate-700">·</span>
            <button onClick={() => setLegal('cookies')} className="hover:text-white transition-colors cursor-pointer">Cookie Policy</button>
          </div>
        </div>
      </div>

      {/* Legal overlay */}
      {legal && <LegalOverlay type={legal} onClose={() => setLegal(null)} />}
    </footer>
  )
}
