const { render } = require("ejs")
const db = require("../db/queries")

async function addPlayerFormGet(req, res) {
    const { teamId } = req.params
    
    res.render("addPlayer", {
        title: "Add Player",
        teamId: teamId
    })
}

async function addPlayerFormPost(req, res) {
    const { teamId } = req.params

    const name = req.body.name
    const position = req.body.position


    await db.addPlayer(name, position, teamId)
    res.redirect(`/team/${teamId}`)
    return
}

async function updatePlayerFormGet(req, res) {
    const { playerId } = req.params

    const info = await db.getPlayerById(playerId) 

    const name = info[0]["player_name"]
    // const position = info[0]["position"]
    // const position = req.body.position

    console.log(name)

    res.render("updatePlayer", {
        title: "Update Player",
        name: name,
        playerId: playerId
    })
}

async function updatePlayerFormPost(req, res) {
    const { playerId } = req.params
    const teamId = await db.getPlayerById(playerId) 

    const name = req.body.name
    const position = req.body.position

    await db.updatePlayer(playerId, name, position)
    res.redirect(`/team/${teamId[0]["team_id"]}`)
    return
}

module.exports = {
    addPlayerFormGet,
    addPlayerFormPost,
    updatePlayerFormGet,
    updatePlayerFormPost,
}