const express = require("express");
const routes = express.Router();
const plantasController = require("../controllers/plantasController");
const AuthController = require('../controllers/authController.js')
const auth = require("../middlewares/auth.js")

routes.get("/plantas", auth, plantasController.listarTodasPlantas);

routes.get("/plantas/:categorias?/:id", auth, plantasController.listarUmaPlanta);

// aos devs do futuro, colocar o auth nas rotas novas!

module.exports = routes;
