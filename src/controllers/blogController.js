const { Blog, FotosGerais } = require("../models");

const blogController = {
  listarPostsBlog: async (req, res) => {
    const listaPostsBlog = await Blog.findAll({
      attributes: ["id","post_titulo", "post_resumo"],
      include: [
        {model: FotosGerais, attributes: [["capa_blog", "Capa_do_blog"], ["capa_blog_cel", "Capa_do_blog_cel"]]},
      ]
    });
    res.json(listaPostsBlog);
  },

  listarUmPostBlog: async( req, res) =>{
    const listaUmPostBlog = await Blog.findByPk(req.params.id, {
      include: [{ model: FotosGerais }],
    })

    if (!listaUmPostBlog) {
      console.error("Post não encontrado!");
    } else if (req.params.categorias == listaUmPostBlog.categoria) {
      res.json(listaUmPostBlog);
    } 
  }
  
};

module.exports = blogController;
