const { Plantas, Informacoes, Fotos } = require("../models");

const plantasController = {
  listarUmaPlanta: async (req, res) => {
    const listeiUmaPlanta = await Plantas.findByPk(req.params.id, {
      include: [{ model: Informacoes }, { model: Fotos }],
    });

    if (!listeiUmaPlanta) {
      {
        res.status(404).json({
          mensagem: "Planta não cadastrada no banco de dados!",
          status: 404,
        });
      }
    } else if (req.params.categorias === listeiUmaPlanta.categoria) {
      res.json(listeiUmaPlanta);
    } else {
      res.status(404).json({
        mensagem: "Planta não encontrada nessa categoria!",
        status: 404,
      });
    }
  },
};

module.exports = plantasController;
