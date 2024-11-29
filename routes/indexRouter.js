const { Router } = require("express")
const indexRouter = Router()
const indexController = require("../controllers/indexController")
const pool = require("../db/pool")

indexRouter.get("/", (req, res) => {
    // console.log statement works here
    console.log(pool)
})

module.exports = indexRouter