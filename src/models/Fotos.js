const db = require("../database");
const { DataTypes } = require("sequelize");

const Fotos = db.define(
  "fotos",
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

    desktop_icon_1: {
      type: DataTypes.STRING,
    },

    desktop_icon_2: {
      type: DataTypes.STRING,
    },

    desktop_icon_3: {
      type: DataTypes.STRING,
    },

    celular_1: {
      type: DataTypes.STRING,
    },

    celular_2: {
      type: DataTypes.STRING,
    },

    celular_3: {
      type: DataTypes.STRING,
    },

    celular_icon_1: {
      type: DataTypes.STRING,
    },

    celular_icon_2: {
      type: DataTypes.STRING,
    },

    celular_icon_3: {
      type: DataTypes.STRING,
    },
    cel_categorias_plantas: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "fotos",
    timestamps: false,
  }
);

module.exports = Fotos;
