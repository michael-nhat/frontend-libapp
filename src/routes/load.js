const customerRouter = require("./customer.js");
const indexRouter = require("./index.js");

function loadRoutes(app) {
    app.use("/customer", customerRouter);
    app.use("/", indexRouter);
}


module.exports = loadRoutes;
