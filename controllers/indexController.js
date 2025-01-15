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

module.exports = {
    indexHomePageGet,
}