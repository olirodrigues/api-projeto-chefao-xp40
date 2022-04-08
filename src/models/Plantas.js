const database = require("../database");
const { DataTypes } = require("sequelize");
const Informacoes = require("./Informacoes");
const Fotos = require("./Fotos");

const Plantas = database.define(
  "plantas",

  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    categoria: DataTypes.STRING,

    nome: {
      type: DataTypes.STRING,
    },

    descricao: {
      type: DataTypes.TEXT,
    },

    cuidados_descricao: {
      type: DataTypes.TEXT,
    },
    cuidados_iluminacao: {
      type: DataTypes.STRING,
    },
    cuidados_agua: {
      type: DataTypes.STRING,
    },
    cuidados_pet: {
      type: DataTypes.STRING,
    },

    informacoes_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Informacoes,
        key: "id",
      },
    },
    fotos_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Fotos,
        key: "id",
      },
    },
  },
  {
    tableName: "plantas",
    timestamps: false,
  }
);

module.exports = Plantas;
