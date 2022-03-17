const db = require("../database");
const { DataTypes, Sequelize } = require("sequelize");
const Cuidados = require("./Cuidados")

const Plantas = db.define("plantas", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            //allowNull: false
        },
        
        nome: {
            type: DataTypes.STRING,
            //allowNull: false
        },
        
        descricao: {
            type: DataTypes.TEXT,
            //allowNull: false
        }, 

        bioma: {
            type: DataTypes.TEXT,
            //allowNull: false
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