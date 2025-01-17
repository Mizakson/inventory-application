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
            leagueId: leagueId
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

async function addTeamFormPost(req, res) {
    const { leagueId } = req.params
    const name = req.body.teamName
    console.log(name, leagueId)

    await db.addTeam(name, leagueId)
    res.redirect(`/league/${leagueId}`)
    return
}

async function updateTeamFormGet(req, res) {
    const { teamId } = req.params
    const team = await db.getTeamById(teamId)

    console.log(teamId, team)

    res.render("updateTeam", {
        title: "Update Team",
        teamId: teamId,
        name: team[0]["team_name"],
    })
}

async function updateTeamFormPost(req, res) {
    const { teamId } = req.params
    const name = req.body.teamName

    console.log(teamId, name)
   
    await db.updateTeam(teamId, name)
    res.redirect(`/team/${teamId}`)
    return
}

module.exports = {
    teamsPageGet,
    addTeamFormGet,
    addTeamFormPost,
    updateTeamFormGet,
    updateTeamFormPost,
}