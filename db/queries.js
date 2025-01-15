const pool = require("./pool")

async function getAllLeagues() {
    const { rows } = await pool.query("SELECT * FROM leagues")
    return rows
}

module.exports = {
    getAllLeagues
}