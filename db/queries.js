const { pool } = require("./pool")

async function getAllTeams(req, res) {
    const { rows } = await pool.query("SELECT * FROM teams")
    return rows
}

module.exports = {
    getAllTeams,
}