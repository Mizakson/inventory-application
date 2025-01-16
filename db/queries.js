const pool = require("./pool")

async function getAllLeagues() {
    const { rows } = await pool.query("SELECT * FROM leagues")
    return rows
}

async function getLeagueById(id) {
    const { rows } = await pool.query("SELECT * FROM leagues WHERE league_id = $1", [id])
    return rows
}

// async function getAllTeams() {
//     const { rows } = await pool.query("SELECT * FROM teams")
//     return rows
// }

async function getTeamsByLeague(id) {
    const { rows } = await pool.query("SELECT * FROM teams WHERE league_id = $1", [id])
    return rows
}

async function getTeamDetails(id) {
    const { rows } = await pool.query("SELECT * FROM teams WHERE team_id = $1", [id])
    return rows
}

async function getPlayersFromTeam(id) {
    const { rows } = await pool.query("SELECT * FROM players WHERE team_id = $1", [id])
    return rows 
}

async function addLeague(name, country) {
    await pool.query("INSERT INTO leagues (league_name, country) VALUES ($1, $2)", [name, country])
}

module.exports = {
    getAllLeagues,
    getLeagueById,
    getTeamsByLeague,
    getTeamDetails,
    getPlayersFromTeam,
    addLeague,
}