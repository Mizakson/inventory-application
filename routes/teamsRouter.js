const { Router } = require("express")
const teamsRouter = Router()
const teamsController = require("../controllers/teamsController")

teamsRouter.get("/:leagueId", teamsController.teamsPageGet)

teamsRouter.get("/add/:leagueId", teamsController.addTeamFormGet)
teamsRouter.post("/add/:leagueId", teamsController.addTeamFormPost)

module.exports = teamsRouter