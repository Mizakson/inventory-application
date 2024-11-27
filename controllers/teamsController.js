const db = require("../db/queries")

async function getTeams(req, res) {
    const teams = await db.getAllTeams()
}

module.exports = {
    getTeams,
    // insertTeam,
}