exports.getHomePage = (req, res) => {
    res.render("index", {
        title: "Basketball Inventory App",
        pageTitle: "Home",
    })
}