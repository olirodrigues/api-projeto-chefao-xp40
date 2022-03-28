const { Sobre, FotosGerais } = require("../models");

const sobreController = {
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
