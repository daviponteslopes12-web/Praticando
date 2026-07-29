import comboService from '../services/comboService.js';

const comboController = {

    async cadastrarCombo(req, res) {
        const { nome, preco, produtos } = req.body;

        try {
            const resultado = await comboService.cadastrarCombo(nome, preco, produtos);

            res.status(201).json({ mensagem: "Combo cadastrado", combo: resultado });
        } catch (erro) {
            console.error("[ERRO] - ", erro);
            res.status(erro.status || 500).json({ mensagem: erro.message || "Erro interno do servidor. Tente novamente mais tarde!" });
        }
    },

    async listarCombos(req, res) {
        try {
            const resultado = await comboService.listarCombos();

            res.status(200).json(resultado);
        } catch (erro) {
            console.error("[ERRO] - ", erro);
            res.status(erro.status || 500).json({ mensagem: erro.message || "Erro interno do servidor. Tente novamente mais tarde!" });
        }
    },

    async listarCombosAtivos(req, res) {
        try {
            const resultado = await comboService.listarCombosAtivos();
            res.status(200).json(resultado);
        } catch (erro) {
            console.error("[ERRO] - ", erro);
            res.status(erro.status || 500).json({ mensagem: erro.message || "Erro interno do servidor. Tente novamente mais tarde!" });
        }
    },

    async editarCombo(req, res) {
        const { id } = req.params;
        const { nome, preco, produtos } = req.body;

        try {
            const resultado = await comboService.editarCombo(id, nome, preco, produtos);

            res.status(200).json({ mensagem: "Combo atualizado", combo: resultado });
        } catch (erro) {
            console.error("[ERRO] - ", erro);
            res.status(erro.status || 500).json({ mensagem: erro.message || "Erro interno do servidor. Tente novamente mais tarde!" });
        }
    },

    async deletarCombo(req, res) {
        const { id } = req.params;

        try {
            await comboService.deletarCombo(id);

            res.status(200).json({ mensagem: "Combo deletado" });
        } catch (erro) {
            console.error("[ERRO] - ", erro);
            res.status(erro.status || 500).json({ mensagem: erro.message || "Erro interno do servidor. Tente novamente mais tarde!" });
        }
    },

    async alternarAtivo(req, res) {
        const { id } = req.params;
        const { ativo } = req.body;

        try {
            const resultado = await comboService.alternarAtivo(id, ativo);

            res.status(200).json({ mensagem: "Status alterado", combo: resultado });
        } catch (erro) {
            console.error("[ERRO] - ", erro);
            res.status(erro.status || 500).json({ mensagem: erro.message || "Erro interno do servidor. Tente novamente mais tarde!" });
        }
    },
}

export default comboController;