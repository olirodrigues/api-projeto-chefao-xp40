const db = require("../database");
const FotosGerais = require("./FotosGerais");
const { DataTypes } = require("sequelize");

const Blog = db.define(
  "blog",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    post_titulo: {
      type: DataTypes.STRING,
    },
    post_resumo: {
      type: DataTypes.STRING,
    },
    post_texto: {
      type: DataTypes.STRING,
    },
    post_fotos_id: {
      type: DataTypes.INTEGER,
      references: {
        model: FotosGerais,
        key: "id",
      },
    },
  },
  {
    tableName: "blog",
    timestamps: false,
  }
);

module.exports = Blog;
