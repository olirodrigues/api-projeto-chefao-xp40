const express = require("express");
const routes = express.Router();
const plantasController = require("../controllers/plantasController");

routes.get("/plantas", plantasController.listarTodasPlantas);

routes.get("/plantas/:categorias?/:id", plantasController.listarUmaPlanta);

module.exports = routes;
