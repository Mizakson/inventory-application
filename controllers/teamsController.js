const { render } = require("ejs")
const db = require("../db/queries")

async function teamsPageGet(req, res) {
    const { leagueId } = req.params
    const teams = await db.getTeamsByLeague(leagueId)

    const sortedArr = teams.slice(0)
    sortedArr.sort(function(a,b) {
        return a["team_id"] - b["team_id"];
    })
    
    if (teams.length > 0) {
        console.log("Teams: ", teams)
        res.render("team", {
            teams: sortedArr,
        })
    }
    else {
        console.log("No Teams...")
        res.render("error", {
            errorMsg: "The league you are looking for has not added any teams yet!",
        })
    }
}

async function addTeamFormGet(req, res) {
    const { leagueId } = req.params
    const leagueName = await db.getLeagueById(leagueId)
    
    res.render("addTeam", {
        title: "Add Team",
        leagueName: leagueName[0]["league_name"],
        leagueId: leagueId,
    })
}

// async function addLeagueFormPost(req, res) {
//     const name = req.body.leagueName
//     const country = req.body.country

//     await db.addLeague(name, country)
//     res.redirect("/")
//     return
// }

// async function updateLeagueFormGet(req, res) {
//     const { leagueId } = req.params
//     const league = await db.getLeagueById(leagueId)

//     console.log(leagueId, league)

//     res.render("updateLeague", {
//         title: "Update League",
//         leagueId: leagueId,
//         name: league[0]["league_name"],
//         country: league[0]["country"],
//     })
// }

// async function updateLeagueFormPost(req, res) {
//     const { leagueId } = req.params
//     const name = req.body.leagueName
//     const country = req.body.country

//     await db.updateLeague(leagueId, name, country)
//     res.redirect("/")
//     return
// }

module.exports = {
    teamsPageGet,
    addTeamFormGet,
}