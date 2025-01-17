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

async function getTeamById(id) {
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

async function updateLeague(id, name, country) {
    await pool.query("UPDATE leagues SET league_name = $1, country = $2 WHERE league_id = $3", [name, country, id])
}

async function addTeam(name, leagueId) {
    await pool.query("INSERT INTO teams (team_name, league_id) VALUES ($1, $2)", [name, leagueId])
}

async function updateTeam(id, name) {
    await pool.query("UPDATE teams SET team_name = $1 WHERE team_id = $2", [name, id])
}

async function addPlayer(name, position, teamId) {
    await pool.query("INSERT INTO players (player_name, position, team_id) VALUES ($1, $2, $3)", [name, position, teamId])
}

async function updatePlayer(id, name, position) {
    await pool.query("UPDATE players SET player_name = $1, position = $2 WHERE player_id = $3", [name, position, id])
}

// getPlayerById?


module.exports = {
    getAllLeagues,
    getLeagueById,
    getTeamsByLeague,
    getTeamDetails,
    getPlayersFromTeam,
    addLeague,
    updateLeague,
    getTeamById,
    addTeam,
    updateTeam,
    addPlayer,
    updatePlayer,
}