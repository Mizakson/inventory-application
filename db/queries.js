const pool = require("./pool")

async function getAllTeams() {
    const rows = await pool.query("SELECT * FROM teams");
    return rows
}

async function insertTeam(teamName, city, country) {
    await pool.query("INSERT INTO teams (team_name, city, country) VALUES ($1, $2, $3)", [teamName, city, country])
}

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
    insertTeam,
    getAllPlayers,
}