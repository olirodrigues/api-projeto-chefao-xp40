const Sequelize = require("sequelize");

const DB_NOME = "portfolio";
const DB_USUARIO = "root";
const DB_SENHA = "";
const DB_CONFIG = {
    dialect: "mysql",
    host: "localhost",
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
        console.error("Não tem conexão com o banco de dados!")
    }
};

Object.assign(db, {
    temConexao,
});
