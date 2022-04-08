const Sequelize = require("sequelize");

const DB_NOME = "heroku_2603bffe6c7c0a4";
const DB_USUARIO = "b42e56119461a6";
const DB_SENHA = "270118a1";
const DB_CONFIG = {
  dialect: "mysql",
  host: "us-cdbr-east-05.cleardb.net",
  port: 3306,
};

let db = {};

try {
  db = new Sequelize(DB_NOME, DB_USUARIO, DB_SENHA, DB_CONFIG);
} catch (error) {
  console.error("Erro ao tentar conexão com o banco de dados");
}

module.exports = db;

async function temConexao() {
  try {
    console.log("Banco de dados conectado!");
  } catch (error) {
    console.error("Não tem conexão com o banco de dados!");
  }
}

Object.assign(db, {
  temConexao,
});

module.exports = db;
