const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.POSTGRES_HOST || 'localhost',
  port: Number(process.env.POSTGRES_PORT) || 5433,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  max: 5,
  connectionTimeoutMillis: 3000
});

async function checkHealth() {
  const start = Date.now();
  try {
    await pool.query('SELECT 1');
    return { status: 'up', latencyMs: Date.now() - start };
  } catch (err) {
    return { status: 'down', error: err.message };
  }
}

module.exports = { pool, checkHealth };
