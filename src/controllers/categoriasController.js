const { Categorias, Plantas, Fotos } = require("../models");

const categoriasController = {
  listarCategorias: async (req,res) => {
    const listaCategorias = await Categorias.findAll();
    res.json(listaCategorias);
  },

  listarPlantasCategorias: async (req, res) => {
    const listaPlantasCategorias = await Plantas.findAll({
      where: { categoria: req.params.categorias },
      attributes: ["categoria", "nome", "fotos_id"],
      include: [
        {
          model: Fotos,
          attributes: [
            ["celular_1", "categoria_plantas"],
            "cel_categorias_plantas",
          ],
        },
      ],
    });

    if (
      req.params.categorias !== "cactos" &&
      req.params.categorias !== "suculentas" &&
      req.params.categorias !== "horticolas"
    ) {
      {
        res.status(404).json({
          mensagem: "Categoria não cadastrada no banco de dados!",
          status: 404,
        });
      }
    } else {
      res.json(listaPlantasCategorias);
    }
  },
};

module.exports = categoriasController;
