const { Pool } = require("pg");

const pool = new Pool({
  host: "192.168.1.76",
  port: 5432,
  user: "admin",
  password: "admin123",
  database: "appdb",
});

module.exports = pool;