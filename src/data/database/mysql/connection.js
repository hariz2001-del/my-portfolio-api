const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  port: Number(process.env.MYSQL_PORT) || 3306,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  connectionLimit: 5,
  connectTimeout: 3000
});

async function checkHealth() {
  const start = Date.now();
  try {
    const conn = await pool.getConnection();
    await conn.ping();
    conn.release();
    return { status: 'up', latencyMs: Date.now() - start };
  } catch (err) {
    return { status: 'down', error: err.message };
  }
}

module.exports = { pool, checkHealth };
