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

  const { name, email, type, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' })
  }

  try {
    await query(
      'INSERT INTO contacts (name, email, type, message, created_at) VALUES (?, ?, ?, ?, NOW())',
      [name.trim(), email.toLowerCase().trim(), type || 'general', message.trim()]
    )
    return res.status(201).json({ success: true })
  } catch (err) {
    console.error('[API] Contact error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
