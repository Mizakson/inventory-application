require("dotenv").config()
const express = require("express")
const path = require("path")
const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

app.use("/", (req, res) => {
    res.send("Hello...")
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
})