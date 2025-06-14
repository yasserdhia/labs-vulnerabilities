const { Pool } = require('pg');

const pool = new Pool({
  user: 'labuser',
  host: 'db',
  database: 'labdb',
  password: 'labpass',
  port: 5432,
});

module.exports = pool;
