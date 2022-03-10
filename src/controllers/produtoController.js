const produtoController = {
    listarProduto: (req, res) => {
        res.json([{ nome: "Produto1"}, { nome: "Produto2"}]);
    },

    cadastrarProduto: (req, res) => {
        console.log(req.body);
        res.send("Produto Cadastrado!")
        
    }
}

module.exports = produtoController;