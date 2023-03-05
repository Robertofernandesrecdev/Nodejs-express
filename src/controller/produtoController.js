// Os dois metodos são aceitos normalmente
const { Produtos, Fabricantes } = require("../models");

const produtoController = {

    listarProduto: async (req, res) => {
        const listarProdutos = await Produtos.findAll({
            include:Fabricantes
        });
        res.json(listarProdutos);
    },

    async cadastrarProduto(req, res) {
        const { nome, preco, quantidade, fabricantes_id } = req.body;
        const novoProduto = await Produtos.create({
            nome,
            preco,
            quantidade,
            fabricantes_id,
        });
        res.json(novoProduto);
        //res.json("Produto Cadastrado");
    },

    async deletarProduto(req, res) {
        const { id } = req.params;
        await Produtos.destroy({
            where: {
                id,
            },
        });
        res.json("Produto Deletado");
    },

    async atualizarProduto(req, res) {
        const { id } = req.params;
        const { nome, preco, quantidade } = req.body;
        const produtoAtualizado = await Produtos.update({
            nome,
            preco,
            quantidade,
        });
        res.json(produtoAtualizado);
    }
};

module.exports = produtoController;