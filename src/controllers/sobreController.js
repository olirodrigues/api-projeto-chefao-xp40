const { Sobre, FotosGerais } = require("../models");

const sobreController = {
  listarPostsSobre: async (req, res) => {
    const listaPostsSobre = await Sobre.findAll();
    res.json(listaPostsSobre);
  },

  listarUmPostSobre: async( req, res) =>{
    const listaUmPostSobre = await Sobre.findByPk(req.params.id, {
      include: [{ model: FotosGerais }],
    })

    if (!listaUmPostSobre) {
      console.error("Post não encontrado!");
    } else if (req.params.categorias == listaUmPostSobre.categoria) {
      res.json(listaUmPostSobre);
    } 
  }
  
};

module.exports = sobreController;
