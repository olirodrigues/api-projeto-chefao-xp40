//const Sequelize = require("sequelize");
const { Plantas, Cuidados } = require("../models");


const produtoController = {
    listarPlantas: async (req, res) => {
        const listaDePlantas = await Plantas.findAll({
            include: Cuidados
        });

        res.json(listaDePlantas);
        //res.json([{ nome: "Produto1"}, { nome: "Produto2"}]);
    },

    listarPranta: async (req,res) => {
        const listeiPranta = await Plantas.findByPk(req.params.id)
        res.json(listeiPranta);
    }


}

module.exports = produtoController;