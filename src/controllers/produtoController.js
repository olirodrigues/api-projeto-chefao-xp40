const produtoController = {
    listarProduto: (req, res) => {
        res.json([{ nome: "Produto1"}, { nome: "Produto2"}]);
    },

    cadastrarProduto: (req, res) => {
        res.json([{ nome: "Produto x"}])
    }
}

module.exports = produtoController;