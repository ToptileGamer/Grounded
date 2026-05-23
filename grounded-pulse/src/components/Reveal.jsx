import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const variants = {
  'fade-up': {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  'fade-left': {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  'fade-right': {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  'fade-in': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
}

export default function Reveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
  distance = 60,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-80px' })

  const v = variants[variant] || variants['fade-up']
  const hiddenV = { ...v.hidden }
  if (variant === 'fade-up') hiddenV.y = distance

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={v}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
