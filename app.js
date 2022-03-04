const express = require("express");
const routes = require("./src/routes");

const app = express();

app.listen(3000, () => console.log("Servidor rodando na porta 3000!"));

app.use(express.json());
app.use(routes);