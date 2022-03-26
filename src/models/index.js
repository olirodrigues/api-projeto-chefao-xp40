const Plantas = require("./Plantas");
const Fotos = require("./Fotos");
const Informacoes = require("./Informacoes");
const Categorias = require("./Categorias");
const Blog = require("./Blog");
const FotosGerais = require("./FotosGerais");

Plantas.belongsTo(Informacoes, {
  foreignKey: "informacoes_id",
});

Plantas.belongsTo(Fotos, {
  foreignKey: "fotos_id",
});

Informacoes.hasOne(Plantas, {
  foreignKey: "informacoes_id",
});

Fotos.hasOne(Plantas, {
  foreignKey: "fotos_id",
});

Blog.belongsTo(FotosGerais, {
  foreignKey: "post_fotos_id",
});

FotosGerais.hasOne(Blog, {  foreignKey: "post_fotos_id"});

module.exports = {
  Plantas,
  Fotos,
  Informacoes,
  Categorias,
  Blog,
  FotosGerais
};
