// create server
const express = require("express");
const app = express();
// user middle ware
app.use(express.json());
// export app modules
module.exports = app;
