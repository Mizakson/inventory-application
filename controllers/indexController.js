const db = require("../db/queries")

module.exports.logTeams = async (req, res) => {
    const teams = await db.getAllTeams()
    console.log(teams)
    res.send(teams)
}