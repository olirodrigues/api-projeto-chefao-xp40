const { Categorias, Plantas, Fotos } = require("../models");

const categoriasController = {
  listarCategorias: async (req, res) => {
    const listaCategorias = await Categorias.findAll();
    res.json(listaCategorias);
  },

  listarPlantasCategorias: async (req, res) => {
    const listaPlantasCategorias = await Plantas.findAll({
      where: {
        categoria: req.params.categorias,
      },
      attributes: ["categoria", "nome", "fotos_id"],
      include: [
        { model: Fotos, attributes: [["celular_1", "categoria_plantas"], "cel_categorias_plantas"] },
      ],
    });

    res.json(listaPlantasCategorias);
  },
};

module.exports = categoriasController;
