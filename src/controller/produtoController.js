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
        res.status(201).json(novoProduto);
        //res.json("Produto Cadastrado");
    },

    async deletarProduto(req, res) {
        try {
            const { id } = req.params;
            await Produtos.destroy({
                where: {
                    id,
                },
            });
            res.status(204);
            // res.json("Produto Deletado");
        } catch (error) {
            return res.status(500).json("Ocorreu algum problema!")
        }     
    },

    async atualizarProduto(req, res) {
        const { id } = req.params;
        const { nome, preco, quantidade } = req.body;

        if (!id) return res.status(400).json("id não enviado");

        const produtoAtualizado = await Produtos.update({
            nome,
            preco,
            quantidade,
        });
        res.json(produtoAtualizado);
    }
};

module.exports = produtoController;