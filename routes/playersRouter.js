const { Router } = require("express")
const playersRouter = Router()
const playersController = require("../controllers/playersController")

playersRouter.get("/:teamId", playersController.playersPageGet)

module.exports = playersRouter