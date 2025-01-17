const { Router } = require("express")
const playerDetailsRouter = Router()
const playerDetailsController = require("../controllers/playerDetailsController")

playerDetailsRouter.get("/add/:teamId", playerDetailsController.addPlayerFormGet)

module.exports = playerDetailsRouter