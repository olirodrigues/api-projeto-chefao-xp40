const Plantas = require("./Plantas");
const Fotos = require("./Fotos");
const Informacoes = require("./Informacoes")
const Categorias =  require("./Categorias")

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

module.exports = {
    Plantas,
    Fotos,
    Informacoes,
    Categorias
};