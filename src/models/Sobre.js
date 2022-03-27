const database = require("../database");
const FotosGerais = require("./FotosGerais");
const { DataTypes } = require("sequelize");

const Sobre = database.define(
  "sobre",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    sobre_titulo: {
      type: DataTypes.STRING,
    },
    sobre_texto: {
      type: DataTypes.STRING,
    },
    sobre_fotos_id: {
      type: DataTypes.INTEGER,
      references: {
        model: FotosGerais,
        key: "id",
      },
    },
  },
  {
    tableName: "sobre",
    timestamps: false,
  }
);

module.exports = Sobre;
