const { Router } = require("express")
const indexRouter = Router()
const indexController = require("../controllers/indexController")

indexRouter.get("/", indexController.indexHomePageGet)

indexRouter.get("/add-league", indexController.addLeagueFormGet)
indexRouter.post("/add-league", indexController.addLeagueFormPost)

indexRouter.get("/update-league/:leagueId", indexController.updateLeagueFormGet)
indexRouter.post("/update-league/:leagueId", indexController.updateLeagueFormPost)

indexRouter.get("/delete-league/:leagueId", indexController.deleteLeague)

module.exports = indexRouter