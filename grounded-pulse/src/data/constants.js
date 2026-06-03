export const SITE_NAME = 'Grounded Pulse'
export const SITE_TAGLINE = 'Digital Wellbeing for a Focused Life'
export const SITE_DESCRIPTION =
  'Your attention immune system. Build healthier digital habits with adaptive friction, focus tools, and mood-aware interventions.'
export const SITE_URL = 'https://groundedpulse.com'
export const COMPANY_EMAIL = 'hayzentechsolutions@gmail.com'

export const NAV_LINKS = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'For You', href: '#for-students' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const SOCIAL_LINKS = [
  { label: 'Twitter', href: 'https://twitter.com/hayzentech' },
  { label: 'Instagram', href: 'https://instagram.com/hayzentech' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/hayzentech' },
  { label: 'YouTube', href: 'https://youtube.com/@hayzentech' },
]

export const FOOTER_LINKS = [
  {
    category: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    category: 'For Users',
    links: [
      { label: 'For Students', href: '#for-students' },
      { label: 'For Parents', href: '#for-parents' },
      { label: 'For Schools', href: '#for-schools' },
      { label: 'Waitlist', href: '#waitlist' },
    ],
  },
  {
    category: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
]

export const PROBLEM_STATS = [
  { value: '3 in 4', label: 'students spend >1hr/day on social media in class', source: 'OECD' },
  { value: '23%', label: 'of adolescents show smartphone addiction patterns', source: 'Indian adolescent study' },
  { value: '90 min', label: 'average unplanned scrolling per session', source: 'Internal research' },
  { value: '2x', label: 'higher depression risk among heavy social users', source: 'Peer-reviewed study' },
]

export const METRICS_DATA = [
  { value: 200, label: 'Students on waitlist', suffix: '+', prefix: '' },
  { value: 40, label: 'Reduction in late-night phone use', suffix: '%', prefix: '', note: 'in beta' },
  { value: 62, label: 'Intervention acceptance rate', suffix: '%', prefix: '' },
  { value: 78, label: 'Average focus score', suffix: '', prefix: '', note: 'out of 100' },
]

export const PRICING_PLANS = [
  {
    name: 'Free',
    price: '₹0',
    period: 'forever',
    description: 'Get started with basic focus tools',
    features: [
      'Focus timer with basic sessions',
      'Daily distraction summary',
      'Up to 5 nudges per day',
      'Basic mood check-ins',
    ],
    cta: 'Join Waitlist',
    popular: false,
  },
  {
    name: 'Premium',
    price: '₹149',
    period: '/month',
    description: 'Full behavior change system for individuals',
    features: [
      'Unlimited focus sessions',
      'Adaptive friction engine',
      'Bedtime protection mode',
      'Weekly distraction profile reports',
      'Mood-aware interventions',
      'Accountability partner (coming soon)',
    ],
    cta: 'Join Waitlist',
    popular: true,
  },
  {
    name: 'Family',
    price: '₹299',
    period: '/month',
    description: 'For parents and teens together',
    features: [
      'Everything in Premium × 4 accounts',
      'Parent dashboard with trend summaries',
      'Consent-based accountability linking',
      'Shared goals and streaks',
      'Family progress reports',
      'Priority support',
    ],
    cta: 'Join Waitlist',
    popular: false,
  },
]

export const LOOP_STEPS = [
  { step: '01', label: 'Notification triggers a check', icon: '🔔' },
  { step: '02', label: 'Quick check becomes a scroll', icon: '📱' },
  { step: '03', label: 'Scroll extends into a loop', icon: '🔄' },
  { step: '04', label: 'Focus is lost for 20+ min', icon: '💨' },
]



export const FAQ_DATA = [
  {
    q: 'How is Grounded Pulse different from app blockers?',
    a: 'App blockers treat the symptom — they just lock you out. Grounded Pulse treats the underlying loop by adding adaptive friction at the right moment. Instead of blocking, we help you build awareness and self-regulation. You stay in control at all times.',
  },
  {
    q: 'Does it collect my personal data or read my content?',
    a: "No. Grounded Pulse is privacy-safe by design. We detect patterns like reopening frequency, session length, and time of day — not what you're viewing or typing. No raw content is collected or stored. Parent dashboards show only anonymized trend summaries.",
  },
  {
    q: 'Can parents really see what their teen is doing?',
    a: "Only what the teen chooses to share. The system is built on consent-based accountability. Teens can share anonymized focus scores, sleep trends, and intervention stats — but never raw app usage or content. It's designed to support trust, not replace it.",
  },
  {
    q: 'Is there a free version? What are the limits?',
    a: 'Yes! The Free plan includes focus timer sessions, daily distraction summaries, up to 5 nudges per day, and basic mood check-ins — forever. Premium unlocks the full adaptive friction engine, bedtime protection, and detailed weekly reports.',
  },
  {
    q: 'Does this work on both Android and iOS?',
    a: "Yes. Grounded Pulse is available on both Android and iOS. The adaptive friction engine works across apps and integrates with your device's existing focus and wellbeing features (Screen Time, Digital Wellbeing, etc.).",
  },
  {
    q: 'Can schools and coaching centers really use this?',
    a: 'Absolutely. We offer a dedicated school tier with cohort-level dashboards, aggregate insights, and no individual surveillance. It\'s designed to help institutions understand and reduce digital distraction at scale — completely privacy-safe for students.',
  },
  {
    q: 'When do you launch? How do I get early access?',
    a: "We're launching soon! Join the waitlist from the pricing section or the CTA at the bottom of this page. Early adopters get priority access and exclusive launch pricing. We'll notify you as soon as we're live.",
  },
]
