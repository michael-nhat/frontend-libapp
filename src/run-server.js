const path = require("path");
const express = require("express");
const ejs = require("ejs");
const engines = require("consolidate");



const loadRoutes = require("./routes/load.js");

require("dotenv").config();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.engine('html', engines.swig); // take note, using 'html', not 'ejs' or 'pug'..
app.set('view engine', 'html'); // also 'html' here.

app.engine('pug', require('pug').__express);
app.engine('ejs', require('ejs').__express);
app.set('views', path.join(__dirname, 'resources', 'views'));


loadRoutes(app);

app.listen(port, () => {
    const timeNow = new Date();
    console.log("FRONTENDLIB listening at port: " + port + " " +timeNow.getHours() +":" + timeNow.getMinutes() + ":" + timeNow.getSeconds());
});
