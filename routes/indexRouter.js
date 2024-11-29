const { Router } = require("express")
const indexRouter = Router()
const indexController = require("../controllers/indexController")
const pool = require("../db/pool")

// error: password authentication failed for user <username>
indexRouter.get("/", indexController.logTeams)

module.exports = indexRouter