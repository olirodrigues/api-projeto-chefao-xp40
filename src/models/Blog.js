const db = require("../database");
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
    post_texto: {
      type: DataTypes.STRING,
    },
    post_fotos_id: {
      type: DataTypes.INTEGER,
    },
    id: {
      type: DataTypes.INTEGER,
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
    tableName: "blog",
    timestamps: false,
  }
);

module.exports = Blog;
