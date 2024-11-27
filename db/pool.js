require("dotenv").config()

const { Pool } = require("pg");

module.exports = new Pool({
  connectionString: `postgresql://${process.env.ROLE_NAME}:${process.env.ROLE_PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`
});