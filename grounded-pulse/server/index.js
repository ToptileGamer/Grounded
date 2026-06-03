import express from 'express'
import cors from 'cors'
import waitlistHandler from '../api/waitlist.js'
import contactsHandler from '../api/contacts.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// Reuse the same Vercel serverless function handlers
app.post('/api/waitlist', (req, res) => waitlistHandler(req, res))
app.post('/api/contacts', (req, res) => contactsHandler(req, res))

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.listen(PORT, () => {
  console.log(`[Server] API running at http://localhost:${PORT}`)
})
