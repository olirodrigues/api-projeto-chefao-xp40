const db = require("../database");
const { DataTypes, Sequelize } = require("sequelize");
const Plantas = require("./Plantas");

const Cuidados = db.define("cuidados", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            //autoIncrement: true,
           
        },

        descricao: {
            type: DataTypes.TEXT,
        },

        temperatura: {
            type: DataTypes.STRING,
        },

        quantidade_agua: {
            type: DataTypes.STRING,
        },

        iluminacao: {
            type: DataTypes.STRING,
        }
    }
    , {
        tableName: "cuidados",
        timestamps: false,
    })


    module.exports = Cuidados;