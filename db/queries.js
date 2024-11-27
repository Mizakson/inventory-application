const pool = require("./pool")

async function getAllTeams() {
    const rows = await pool.query("SELECT * FROM teams");
    return rows
}

// insertTeam

// updateTeam

// deleteTeam

async function getAllPlayers() {
    const rows = await pool.query("SELECT * FROM players");
}

// insertPlayer

// updatePlayer

// deletePlayer

module.exports = {
    getAllTeams,
    getAllPlayers,
}