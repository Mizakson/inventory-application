async function indexHomePageGet(req, res) {
    res.render("index", {
        title: "Inventory App",
    })
}

module.exports = {
    indexHomePageGet,
}