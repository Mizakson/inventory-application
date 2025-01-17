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

module.exports = {
    addPlayerFormGet,
    addPlayerFormPost
}