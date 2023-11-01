const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Replace with your actual connection string
});

module.exports = pool;
