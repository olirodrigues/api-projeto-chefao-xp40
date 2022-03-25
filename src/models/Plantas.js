const db = require("../database");
const { DataTypes, Sequelize } = require("sequelize");
const Cuidados = require("./Cuidados")

const Plantas = db.define("plantas", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
                },
        
        nome: {
            type: DataTypes.STRING,
        },
        
        descricao: {
            type: DataTypes.TEXT,
        }, 

        bioma: {
            type: DataTypes.TEXT,
        },
        
        cuidados_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Cuidados,
                key: 'id'
            }
        }

    }, {
        tableName: "plantas",
        timestamps: false,
    });


module.exports = Plantas;