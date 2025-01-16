const { render } = require("ejs")
const db = require("../db/queries")

async function indexHomePageGet(req, res) {
    const leagues = await db.getAllLeagues()
    console.log("Leagues: ", leagues)
    res.render("index", {
        title: "Inventory App",
        leagues: leagues
    })
}

async function addLeagueFormGet(req, res) {
    res.render("addLeague", {
        title: "Add League",
    })
}

async function addLeagueFormPost(req, res) {
    const name = req.body.leagueName
    const country = req.body.country

    await db.addLeague(name, country)
    res.redirect("/")
    return
}

async function updateLeagueFormGet(req, res) {
    const { leagueId } = req.params
    const league = await db.getLeagueById(leagueId)

    console.log(leagueId, league)

    res.render("updateLeague", {
        title: "Update League",
        leagueId: leagueId,
        name: league[0]["league_name"],
        country: league[0]["country"],
    })
}

// async function updateLeagueFormPost(req, res) {

// }

module.exports = {
    indexHomePageGet,
    addLeagueFormGet,
    addLeagueFormPost,
    updateLeagueFormGet,
    // updateLeagueFormPost
}