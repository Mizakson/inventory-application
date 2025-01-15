const { Router } = require("express")
const teamsRouter = Router()
const teamsController = require("../controllers/teamsController")

teamsRouter.get("/:leagueId", teamsController.teamsPageGet)

module.exports = teamsRouter