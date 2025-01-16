const { Router } = require("express")
const teamsRouter = Router()
const teamsController = require("../controllers/teamsController")

teamsRouter.get("/:leagueId", teamsController.teamsPageGet)

teamsRouter.get("/add-team/:leagueId", teamsController.addTeamFormGet)
// teamsRouter.post("/add/:teamId", teamsController.addTeamFormPost)

// teamsRouter.get("/update/:teamId", teamsController.updateTeamFormGet)
// teamsRouter.post("/update/:teamId", teamsController.updateTeamFormPost)

module.exports = teamsRouter