const express = require("express");
const routes = express.Router();
const produtoController = require("../controllers/produtoController");

routes.get("/produto", produtoController.listarProduto);

routes.post("/produto", produtoController.cadastrarProduto);

module.exports = routes;