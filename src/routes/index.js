const express = require("express");
const routes = express.Router();
const produtoController = require("../controllers/produtoController");

routes.get("/plantas", produtoController.listarTodasPlantas);

routes.get("/plantas/:categorias?/:id", produtoController.listarUmaPlanta);

//routes.get("plantas/categorias", produtoController.listarCategorias);

module.exports = routes;