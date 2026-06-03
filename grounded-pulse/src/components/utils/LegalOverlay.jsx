import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LEGAL_CONTENT = {
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'May 2026',
    sections: [
      {
        heading: 'Introduction',
        content:
          'Grounded Pulse ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application and website.',
      },
      {
        heading: 'Information We Collect',
        content:
          'We collect only the minimum information needed to provide our service: (a) Account information: email address and display name when you sign up; (b) Usage patterns: anonymized data about app reopening frequency, session duration, and time-of-day usage — never the content of what you view or type; (c) Mood check-ins: voluntary mood entries that are not linked to your identity in raw form.',
      },
      {
        heading: 'How We Use Your Information',
        content:
          'Your information is used solely to: (a) Provide adaptive friction interventions based on detected patterns; (b) Generate anonymized aggregate insights for product improvement; (c) Send you service-related communications (with your consent). We never sell your personal data.',
      },
      {
        heading: 'Data Protection',
        content:
          'We implement industry-standard security measures including encryption in transit (TLS 1.3) and at rest (AES-256). Usage patterns are aggregated and anonymized before storage. Raw individual data is retained only for the duration of your active session and promptly deleted afterward.',
      },
      {
        heading: 'Your Rights',
        content:
          'You have the right to access, correct, or delete your personal data at any time. You can export your data or delete your account from within the app. For assistance, contact us at hayzentechsolutions@gmail.com.',
      },
      {
        heading: 'Third-Party Services',
        content:
          'We use no third-party analytics, advertising, or tracking services. Our database is hosted on TiDB Serverless (MySQL-compatible), which complies with SOC 2 and GDPR standards.',
      },
      {
        heading: 'Changes to This Policy',
        content:
          'We may update this policy from time to time. Material changes will be notified via email or in-app notice. Continued use after changes constitutes acceptance of the updated policy.',
      },
      {
        heading: 'Contact',
        content:
          'For privacy-related inquiries, contact us at hayzentechsolutions@gmail.com or write to HayzenTech Solutions, Bengaluru, India.',
      },
    ],
  },
  terms: {
    title: 'Terms of Service',
    lastUpdated: 'May 2026',
    sections: [
      {
        heading: 'Acceptance of Terms',
        content:
          'By accessing or using Grounded Pulse ("the Service"), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.',
      },
      {
        heading: 'Description of Service',
        content:
          'Grounded Pulse provides digital wellbeing tools including adaptive friction interventions, focus session tracking, mood check-ins, and pattern detection. The Service is not a medical device and is not intended to diagnose, treat, or cure any medical condition.',
      },
      {
        heading: 'User Responsibilities',
        content:
          'You agree to: (a) Provide accurate information when creating an account; (b) Not misuse the Service for any illegal or unauthorized purpose; (c) Not attempt to bypass, disable, or interfere with the adaptive friction mechanisms; (d) Respect the consent-based accountability features when linked with family members.',
      },
      {
        heading: 'Privacy & Data',
        content:
          'Your use of the Service is governed by our Privacy Policy. We are committed to privacy-safe design: no raw content is collected, and all pattern detection is anonymized at the earliest possible stage.',
      },
      {
        heading: 'Intellectual Property',
        content:
          'The Service, including its code, design, branding, and algorithms, is the intellectual property of HayzenTech Solutions. You may not copy, modify, distribute, or reverse-engineer any part of the Service without explicit written permission.',
      },
      {
        heading: 'Limitation of Liability',
        content:
          'The Service is provided "as is" without warranties of any kind. HayzenTech Solutions shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Service.',
      },
      {
        heading: 'Termination',
        content:
          'We reserve the right to suspend or terminate access to the Service for violations of these terms. You may delete your account at any time.',
      },
      {
        heading: 'Changes to Terms',
        content:
          'We may update these terms with notice. Continued use after changes constitutes acceptance. Contact hayzentechsolutions@gmail.com with questions.',
      },
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    lastUpdated: 'May 2026',
    sections: [
      {
        heading: 'What Are Cookies',
        content:
          'Cookies are small text files stored on your device by your web browser. They help websites remember your preferences and improve your experience. Grounded Pulse uses minimal, privacy-respecting cookies.',
      },
      {
        heading: 'Cookies We Use',
        content:
          'We use only essential cookies required for the Service to function: (a) Session cookie: to keep you logged in during your browsing session; (b) Preference cookie: to remember your theme and accessibility settings. We do not use tracking, advertising, or analytics cookies.',
      },
      {
        heading: 'No Third-Party Cookies',
        content:
          'Grounded Pulse does not use any third-party cookies, trackers, or analytics services. We believe in privacy-first design, which means no data is shared with advertising networks, data brokers, or analytics platforms.',
      },
      {
        heading: 'Managing Cookies',
        content:
          'You can control cookies through your browser settings. Disabling essential cookies may affect the functionality of the Service. Most browsers allow you to block or delete cookies from their settings menu.',
      },
      {
        heading: 'Updates',
        content:
          'We may update this Cookie Policy as needed. Check this page for the latest version. Contact hayzentechsolutions@gmail.com with questions.',
      },
    ],
  },
}

export default function LegalOverlay({ type, onClose }) {
  const content = LEGAL_CONTENT[type]

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  if (!content) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto bg-slate-900/60 backdrop-blur-sm py-8 px-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose()
        }}
        role="dialog"
        aria-modal="true"
        aria-label={content.title}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.97 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden"
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-5 flex items-center justify-between z-10">
            <div>
              <h2 className="text-lg font-bold text-slate-900">{content.title}</h2>
              <p className="text-xs text-slate-400">Last updated: {content.lastUpdated}</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors text-slate-500 hover:text-slate-700"
              aria-label="Close"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="px-6 py-6 space-y-6">
            {content.sections.map((section, i) => (
              <div key={i}>
                <h3 className="text-sm font-bold text-slate-900 mb-2">{section.heading}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 bg-white border-t border-slate-100 px-6 py-4 flex justify-end">
            <button
              onClick={onClose}
              className="bg-slate-900 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-slate-800 transition-all active:scale-[0.97]"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
