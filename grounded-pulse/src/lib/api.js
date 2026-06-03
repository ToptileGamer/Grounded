// API client — replaces Firebase Firestore calls
// In development, the Express server runs on port 3001
// In production (Vercel), the API runs at /api/* (same domain)

const API_BASE = import.meta.env.DEV
  ? 'http://localhost:3001/api'
  : '/api'

export async function submitWaitlist(email) {
  const res = await fetch(`${API_BASE}/waitlist`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })

  if (!res.ok) {
    const data = await res.json().catch(() => ({}))
    throw new Error(data.error || 'Failed to join waitlist')
  }

  return res.json()
}

export async function submitContact({ name, email, type, message }) {
  const res = await fetch(`${API_BASE}/contacts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, type, message }),
  })

  if (!res.ok) {
    const data = await res.json().catch(() => ({}))
    throw new Error(data.error || 'Failed to send message')
  }

  return res.json()
}
