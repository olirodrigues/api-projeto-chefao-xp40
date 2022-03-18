const express = require("express");
const routes = require("./src/routes");
const database = require("./src/database");
const db = require("./src/database");

const app = express();
const PORT = 8000;

db.temConexao();

app.listen(process.env.PORT || 8001, () => console.log("Servidor online!"));
app.use(express.json());
app.use(routes);
