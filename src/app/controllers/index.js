class IndexController {
    show(req, res) {
        res.render("home.ejs");
    }
}

module.exports = new IndexController;
