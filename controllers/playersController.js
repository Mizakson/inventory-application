const { render } = require("ejs")
const db = require("../db/queries")

async function playersPageGet(req, res) {
    const { teamId } = req.params
    const players = await db.getPlayersFromTeam(teamId)

    const sortedArr = players.slice(0)
    sortedArr.sort(function(a,b) {
        return a["player_id"] - b["player_id"];
    })

    if (players.length > 0) {
        console.log("Players: ", players)
        res.render("players", {
            players: sortedArr,
            teamId: teamId,
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