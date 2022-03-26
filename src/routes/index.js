const express = require("express");
const routes = express.Router();
const plantasController = require("../controllers/plantasController");
const categoriasController = require("../controllers/categoriasController");
const blogController = require("../controllers/blogController");

const auth = require("../middlewares/auth.js")

routes.get("/plantas", auth, categoriasController.listarCategorias);  
routes.get("/plantas/:categorias", auth, categoriasController.listarPlantasCategorias); 
routes.get("/plantas/:categorias/:id", auth, plantasController.listarUmaPlanta); 


routes.get("/blog/", auth, blogController.listarPostsBlog);

routes.get("/blog/:id", auth, blogController.listarUmPost);


//criar rota sobre nós

// aos devs do futuro, colocar o auth nas rotas novas!

module.exports = routes;
