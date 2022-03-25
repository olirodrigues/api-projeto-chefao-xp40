const db = require("../database");
const { DataTypes } = require("sequelize");

const Categorias = db.define("categorias", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },

        nome: {
            type: DataTypes.STRING,
        },

        foto_desktop: {
            type: DataTypes.STRING,
        },

        foto_tablet: {
            type: DataTypes.STRING,
        },

        foto_celular: {
            type: DataTypes.STRING,
        }
    }
    , {
        tableName: "categorias",
        timestamps: false,
    })

    module.exports = Categorias;