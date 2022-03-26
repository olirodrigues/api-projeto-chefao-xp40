const { Plantas, Informacoes, Fotos, Categorias } = require("../models");

const plantasController = {
  listarUmaPlanta: async (req, res) => {
    const listeiUmaPlanta = await Plantas.findByPk(req.params.id, {
      include: [{ model: Informacoes }, { model: Fotos }],
    });

    if (!listeiUmaPlanta) {
      console.error("Planta não cadastrada no banco de dados!");
    } else if (req.params.categorias == listeiUmaPlanta.categoria) {
      res.json(listeiUmaPlanta);
    } else {
      console.error("Planta não encontrada nessa categoria!");
    }
  },
};

module.exports = plantasController;
