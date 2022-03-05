const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
    res.send("Método Get funcionando!");
});

routes.post("/", (req, res) => {
    console.log(req.body);
    res.send("Criei um produto!");
});


module.exports = routes;