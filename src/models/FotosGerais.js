const database = require("../database");
const { DataTypes } = require("sequelize");

const FotosGerais = database.define(
  "fotos_gerais",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    desktop_1: {
      type: DataTypes.STRING,
    },
    desktop_2: {
      type: DataTypes.STRING,
    },
    desktop_3: {
      type: DataTypes.STRING,
    },
    desktop_4: {
      type: DataTypes.STRING,
    },
    tablet_1: {
      type: DataTypes.STRING,
    },
    tablet_2: {
      type: DataTypes.STRING,
    },
    tablet_3: {
      type: DataTypes.STRING,
    },
    celular_1: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "fotos_gerais",
    timestamps: false,
  }
);

module.exports = FotosGerais;
