//const Sequelize = require("sequelize");
const { Plantas } = require("../models");

const plantasController = {
  listarTodasPlantas: async (req, res) => {
    const listaTodasPlantas = await Plantas.findAll();
    res.json(listaTodasPlantas);
  },

  listarUmaPlanta: async (req, res) => {
    const listeiUmaPlanta = await Plantas.findByPk(req.params.id);
    res.json(listeiUmaPlanta);
  },
};

module.exports = plantasController;
