require("dotenv").config()
const { pool } = require("./db/pool")
const express = require("express")
const path = require("path")
const app = express()

const indexRouter = require("./routes/indexRouter")

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath))

app.use("/", (req, res) => {
    console.log(pool)
    res.render("index", {
        host: pool.options.host,
        user: pool.options.user,
        password: pool.options.password,
        port: pool.options.port,
        database: pool.options.database,
    })
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
})