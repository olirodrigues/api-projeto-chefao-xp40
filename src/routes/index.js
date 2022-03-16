const express = require("express");
const routes = express.Router();
const produtoController = require("../controllers/produtoController");

routes.get("/plantas", produtoController.listarPlantas);

routes.get("/plantas/:categorias", produtoController.listarPlantas);


// plantas/4/24

routes.get("/plantas/:categorias?/:id", produtoController.listarPranta)


module.exports = routes;