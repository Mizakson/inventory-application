const { Router } = require("express")
const indexRouter = Router()
const indexController = require("../controllers/indexController")

indexRouter.get("/", indexController.indexHomePageGet)
indexRouter.get("/add-league", indexController.addLeagueFormGet)
indexRouter.post("/add-league", indexController.addLeagueFormPost)

module.exports = indexRouter