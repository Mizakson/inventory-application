const { Router } = require("express")
const playersRouter = Router()
const playersController = require("../controllers/playersController")
const teamsController = require("../controllers/teamsController")

playersRouter.get("/:teamId", playersController.playersPageGet)

playersRouter.get("/update/:teamId", teamsController.updateTeamFormGet)
playersRouter.post("/update/:teamId", teamsController.updateTeamFormPost)

playersRouter.get("/delete/:teamId", teamsController.deleteTeam)

module.exports = playersRouter