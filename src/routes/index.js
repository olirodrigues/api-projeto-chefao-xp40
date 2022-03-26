const express = require("express");
const routes = express.Router();
const plantasController = require("../controllers/plantasController");
const categoriasController = require("../controllers/categoriasController");
const blogController = require("../controllers/blogController");

const auth = require("../middlewares/auth.js")

routes.get("/plantas", auth, categoriasController.listarCategorias);  //mostra todas categorias

routes.get("/plantas/:categorias", auth, categoriasController.listarPlantasCategorias); //listar plantas da

routes.get("/plantas/:categorias?/:id?", auth, plantasController.listarUmaPlanta); //lista 1 planta

routes.get("/blog/", auth, blogController.listarPostsBlog);


//criar rota sobre nós

// aos devs do futuro, colocar o auth nas rotas novas!

module.exports = routes;
