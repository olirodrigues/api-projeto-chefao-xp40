const express = require("express");
const routes = require("./src/routes");
const database = require("./src/database");
const db = require("./src/database");

const app = express();

app.listen(3001, () => console.log("Servidor rodando na porta 3001!"));

db.temConexao();

app.use(express.json());
app.use(routes);