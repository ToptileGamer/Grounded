import 'dotenv/config'
import mysql from 'mysql2/promise'

let pool

export function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'grounded_pulse',
      port: parseInt(process.env.DB_PORT || '3306'),
      ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: true } : undefined,
      waitForConnections: true,
      connectionLimit: 5,
      queueLimit: 0,
    })
  }
  return pool
}

export async function query(sql, params) {
  const pool = getPool()
  const [rows] = await pool.execute(sql, params)
  return rows
}

export async function closePool() {
  if (pool) {
    await pool.end()
    pool = null
  }
}
