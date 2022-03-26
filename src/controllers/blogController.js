const { Blog, FotosGerais } = require("../models");

const blogController = {
  listarPostsBlog: async (req, res) => {
    const listaPosts = await Blog.findAll({
      attributes: ["post_titulo", "post_resumo"],
      include: [
        {model: FotosGerais, attributes: [["capa_blog", "Capa_do_blog"], ["capa_blog_cel", "Capa_do_blog_cel"]]},
      ]
    });
    res.json(listaPosts);
  },
};

module.exports = blogController;
