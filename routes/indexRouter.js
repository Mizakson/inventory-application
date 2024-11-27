const { Router } = require("express")
const indexRouter = Router()
const { getHomePage } = require("../controllers/indexController")

indexRouter.get("/", getHomePage)

module.exports = indexRouter