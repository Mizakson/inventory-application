const { Router } = require("express")
const playerDetailsRouter = Router()
const playerDetailsController = require("../controllers/playerDetailsController")

playerDetailsRouter.get("/add/:teamId", playerDetailsController.addPlayerFormGet)
playerDetailsRouter.post("/add/:teamId", playerDetailsController.addPlayerFormPost)

playerDetailsRouter.get("/update/:playerId", playerDetailsController.updatePlayerFormGet)
playerDetailsRouter.post("/update/:playerId", playerDetailsController.updatePlayerFormPost)

module.exports = playerDetailsRouter