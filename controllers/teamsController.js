const { render } = require("ejs")
const db = require("../db/queries")

async function teamsPageGet(req, res) {
    const { leagueId } = req.params
    const teams = await db.getTeamsByLeague(leagueId)
    
    if (teams.length > 0) {
        res.render("team", {
            teams: teams
        })
    }
    else {
        res.render("error", {
            errorMsg: "The league you are looking for has not added any teams yet!",
        })
    }
}

module.exports = {
    teamsPageGet
}