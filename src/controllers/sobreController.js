const { Sobre, FotosGerais } = require("../models");

const sobreController = {
  listarUmPostSobre: async (req, res) => {
    const listaUmPostSobre = await Sobre.findByPk(req.params.id, {
      include: [{ model: FotosGerais }],
    });

    if (!listaUmPostSobre) {
      res.status(404).json({
        mensagem:
          "Ops! Algo deu errado, a página que você tentou acessar não existe.",
        status: 404,
      });
    } else if (req.params.categorias == listaUmPostSobre.categoria) {
      res.json(listaUmPostSobre);
    }
  },
};
module.exports = sobreController;
