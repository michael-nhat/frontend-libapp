const router = require("express").Router();

const userController = require("../app/controllers/customer.js");

router.get('/', userController.show);

module.exports = router;
