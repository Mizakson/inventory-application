const { render } = require("ejs")
const db = require("../db/queries")

async function teamsPageGet(req, res) {
    const { leagueId } = req.params
    const teams = await db.getTeamsByLeague(leagueId)
    // get league name text here
    res.render("team", {
        teams: teams
    })
}

module.exports = {
    teamsPageGet
}