const express = require("express");
const routes = express.Router();
const plantasController = require("../controllers/plantasController");
const categoriasController = require("../controllers/categoriasController");
const blogController = require("../controllers/blogController");
const sobreController = require("../controllers/sobreController");
const auth = require("../middlewares/auth.js")


routes.get("/plantas", auth, categoriasController.listarCategorias);  
routes.get("/plantas/:categorias", auth, categoriasController.listarPlantasCategorias); 
routes.get("/plantas/:categorias/:id", auth, plantasController.listarUmaPlanta); 

routes.get("/blog", auth, blogController.listarPostsBlog);
routes.get("/blog/:id", auth, blogController.listarUmPostBlog);

routes.get("/sobre/:id", auth, sobreController.listarUmPostSobre)

module.exports = routes;
