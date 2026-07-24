import produtoService from "../services/produtoService.js";

const produtoController = {

    async cadastrarProduto(req, res) {
        const { nome, descricao, preco, categoria, imagem } = req.body;

        try {

            const resultado = await produtoService.cadastrarProduto(nome, descricao, preco, categoria, imagem);

            res.status(201).json({ mensagem: "Produto cadastrado", produto: resultado});
        } catch (erro) {
            console.error("[ERRO] - ", erro);
            res.status(erro.status || 500).json({ mensagem: erro.message || "Erro interno do servidor. Tente novamente mais tarde!" });
        }
    },

    async editarProduto(req, res) {
        const { id } = req.params;
        const { dados } = req.body;

        try {

            const resultado = await produtoService.editarProduto(id, dados);

            res.status(200).json({ mensagem: "Produto atualizado", produto: resultado });

        } catch (erro) {
            console.error("[ERRO] - ", erro);
            res.status(erro.status || 500).json({ mensagem: erro.message || "Erro interno do servidor. Tente novamente mais tarde!" });
        }
    },

    async deletarProduto(req, res) {
        const { id } = req.params;

        try {

            const resultado = await produtoService.deletarProduto(id);

            res.status(200).json({ mensagem: "Produto deletado" });

        } catch (erro) {
            console.error("[ERRO] - ", erro);
            res.status(erro.status || 500).json({ mensagem: erro.message || "Erro interno do servidor. Tente novamente mais tarde!" });
        }
    },

    async buscarProdutos(req, res) {

        try {
            const resultado = await produtoService.buscarProdutos();

            res.status(200).json(resultado);
        } catch (erro) {
            console.error("[ERRO] - ", erro);
            res.status(erro.status || 500).json({ mensagem: erro.message || "Erro interno do servidor. Tente novamente mais tarde!" });
        }
    },

    async buscarProdutosAtivos(req, res) {

        try {
            const resultado = await produtoService.buscarProdutosAtivos();

            res.status(200).json(resultado);
        } catch (erro) {
            console.error("[ERRO] - ", erro);
            res.status(erro.status || 500).json({ mensagem: erro.message || "Erro interno do servidor. Tente novamente mais tarde!" });
        }
    },


    async alternarAtivo(req, res) {
        const { id } = req.params;
        const { ativo } = req.body;

        try {
            const resultado = await produtoService.alternarAtivo(id, ativo);
            res.status(200).json({ mensagem: "Status alterado", produto: resultado });
        } catch (erro) {
            console.error("[ERRO] - ", erro);
            res.status(erro.status || 500).json({ mensagem: erro.message || "Erro interno do servidor. Tente novamente mais tarde!" });
        }
    },

}

export default produtoController;