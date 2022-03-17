const db = require("../database");
const { DataTypes, Sequelize } = require("sequelize");
const Plantas = require("./Plantas");

const Cuidados = db.define("cuidados", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            //allowNull: false,
           
        },

        descricao: {
            type: DataTypes.TEXT,
            //allowNull: false,
        },

        temperatura: {
            type: DataTypes.STRING,
            //allowNull: false,
        },

        quantidade_agua: {
            type: DataTypes.STRING,
            //allowNull: false,
        },

        iluminacao: {
            type: DataTypes.STRING,
            //allowNull: false,
        }
    }
    , {
        tableName: "cuidados",
        timestamps: false,
    })


    module.exports = Cuidados;