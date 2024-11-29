require("dotenv").config()
const { Pool } = require("pg")

// const pool = new Pool({
//     host: process.env.PGHOST,
//     user: process.env.PGUSER,
//     password: process.env.PGPASSWORD,
//     port: Number(process.env.PGPORT),
//     database: process.env.PGDATABASE,
// })

const pool = new Pool({
    connectionString: process.env.CONNECTION_STR,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  });

// console.log(pool.options.password)

module.exports = pool