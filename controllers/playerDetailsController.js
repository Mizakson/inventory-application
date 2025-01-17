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
    return 0
}

module.exports = {
    addPlayerFormGet,
    addPlayerFormPost
}