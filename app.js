require("dotenv").config()
const express = require("express")
const path = require("path")
const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

const indexRouter = require("./routes/indexRouter")
const teamsRouter = require("./routes/teamsRouter")

app.use("/", indexRouter)
app.use("/teams", teamsRouter)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
})