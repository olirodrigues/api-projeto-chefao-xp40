const Plantas = require("./Plantas");
const Cuidados = require("./Cuidados");

Plantas.belongsTo(Cuidados, {
    foreignKey: "cuidados_id",
});

Cuidados.hasMany(Plantas, {
    foreignKey: "cuidados_id",
});

module.exports = {
    Cuidados,
    Plantas,
};