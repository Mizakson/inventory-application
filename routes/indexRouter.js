const { Router } = require("express")
const indexRouter = Router()
const pool = require("../db/pool")

// error: password authentication failed for user <username>
indexRouter.get("/", (req, res) => {
    res.render("index", {
        title: "Boop",
    })
})

module.exports = indexRouter