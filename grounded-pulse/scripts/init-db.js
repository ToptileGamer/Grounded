/**
 * Database initialization script.
 * Reads schema.sql and executes it against the configured MySQL database.
 *
 * Usage:
 *   node scripts/init-db.js
 *
 * Make sure your .env file has the correct DB credentials before running.
 */

import 'dotenv/config'
import mysql from 'mysql2/promise'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function initDb() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    port: parseInt(process.env.DB_PORT || '3306'),
    multipleStatements: true,
    ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: true } : undefined,
  })

  console.log('[InitDB] Connected to MySQL')

  const schemaPath = resolve(__dirname, '..', 'schema.sql')
  const schema = readFileSync(schemaPath, 'utf-8')

  try {
    await connection.query(schema)
    console.log('[InitDB] Schema applied successfully')
  } catch (err) {
    console.error('[InitDB] Error applying schema:', err.message)
    process.exit(1)
  } finally {
    await connection.end()
    console.log('[InitDB] Done')
  }
}

initDb()
