const { render } = require("ejs")
const db = require("../db/queries")

async function playersPageGet(req, res) {
    const { teamId } = req.params
    const players = await db.getPlayersFromTeam(teamId)

    if (players.length > 0) {
        console.log("Players: ", players)
        res.render("players", {
            players: players
        })
    }
    else {
        console.log("No Players...")
        res.render("error", {
            errorMsg: "The team you are looking for has not added any players yet!",
        })
    }
}

module.exports = {
    playersPageGet
}