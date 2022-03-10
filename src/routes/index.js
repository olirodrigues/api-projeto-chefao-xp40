const express = require("express");
const routes = express.Router();
const produtoController = require("../controllers/produtoController");

routes.get("/", produtoController.listarProduto);

routes.post("/", produtoController.cadastrarProduto);

module.exports = routes;