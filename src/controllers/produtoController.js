//const Sequelize = require("sequelize");
const { Plantas, Cuidados } = require("../models");

const produtoController = {
  listarTodasPlantas: async (req, res) => {
    const listaTodasPlantas = await Plantas.findAll({
      include: Cuidados,
    });

    res.json(listaTodasPlantas);
  },

  listarUmaPlanta: async (req, res) => {
    const listeiUmaPlanta = await Plantas.findByPk(req.params.id);
    res.json(listeiUmaPlanta);
  },
};

module.exports = produtoController;
