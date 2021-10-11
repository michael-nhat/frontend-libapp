const router = require("express").Router();

const indexController = require("../app/controllers/index.js");

router.get('/', indexController.show);

module.exports = router;
