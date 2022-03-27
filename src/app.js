const express = require("express");
const routes = require("./routes");
const database = require("./database");
const cors = require("cors");
const PORT = 8000;
const app = express();

database.temConexao();

app.listen(process.env.PORT || 8001, () => console.log("Servidor online!"));
app.use(express.json());
app.use(cors());
app.use(routes);
