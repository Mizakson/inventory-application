const { Router } = require("express")
const { getTeams } = require("../controllers/teamsController")
const teamsRouter = Router()

teamsRouter.get("/teams", getTeams)

module.exports = teamsRouter