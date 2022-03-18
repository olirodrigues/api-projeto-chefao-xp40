const express = require("express");
const routes = require("./routes");
const database = require("./database");
const db = require("./database");

const app = express();
const PORT = 8000;

db.temConexao();

app.listen(process.env.PORT || 8001, () => console.log("Servidor online!"));
app.use(express.json());
app.use(routes);
