const { Router } = require("express")
const teamsRouter = Router()
const teamsController = require("../controllers/teamsController")

teamsRouter.get("/:leagueId", teamsController.teamsPageGet)

teamsRouter.get("/add-team/:leagueId", teamsController.addTeamFormGet)
teamsRouter.post("/add-team/:leagueId", teamsController.addTeamFormPost)

module.exports = teamsRouter