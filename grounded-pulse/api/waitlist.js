import { query } from '../lib/db.js'

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Email is required' })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' })
  }

  try {
    await query(
      'INSERT INTO waitlist (email, source, created_at) VALUES (?, ?, NOW())',
      [email.toLowerCase().trim(), 'landing-page']
    )
    return res.status(201).json({ success: true })
  } catch (err) {
    // Duplicate email
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(200).json({ success: true, message: 'Already on the list' })
    }
    console.error('[API] Waitlist error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
