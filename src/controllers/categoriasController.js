const { Categorias, Plantas } = require("../models");


const categoriasController = {
    listarCategorias: async (req, res) => {
        const listaCategorias = await Categorias.findAll();
         res.json(listaCategorias);
      },

      listarPlantasCategorias: async (req, res) =>{
         
      const listaPlantasCategorias = await Plantas.findAll(
          { where: {
                categoria: req.params.categorias
            },
            attributes:["categoria"]
            })
           
        res.json(listaPlantasCategorias);
    }
}

module.exports = categoriasController;