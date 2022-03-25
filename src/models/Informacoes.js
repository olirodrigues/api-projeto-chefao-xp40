const db = require("../database");
const { DataTypes } = require("sequelize");

const Informacoes = db.define("informacoes", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },

        nome_cientifico: {
            type: DataTypes.STRING,
        },

        categoria_descricao: {
            type: DataTypes.TEXT,
        },

        altura: {
            type: DataTypes.TEXT,
        },

        luminosidade: {
            type: DataTypes.STRING,
        }, 
    }
    , {
        tableName: "informacoes",
        timestamps: false,
    })

    module.exports = Informacoes;