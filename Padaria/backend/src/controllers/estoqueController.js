import { estoqueService } from "../services/estoqueService.js";

export const estoqueController = {

    async cadastrar(req, res) {

        try {
            const { produto } = req.body;

            const resultado = await estoqueService.cadastrar(produto);

            return res.status(201).json({ mensagem: 'Produto criado com sucesso' });

        } catch (error) {

            return res.status(error.status || 500).json({ mensagem: error.mensagem || 'Erro interno do servidor' });
        }
    },

    async adicionarEstoque(req, res) {

        try {
            const { produto, quantidade } = req.body;

            const resultado = await estoqueService.adicionarEstoque(produto, quantidade);

            return res.status(200).json({ mensagem: 'Produto adicionado com sucesso' });

        } catch (error) {

            return res.status(error.status || 500).json({ mensagem: error.mensagem || 'Erro interno do servidor' });
        }
    },

    async retirarEstoque(req, res) {

        try {
            const { produto, quantidade } = req.body;

            const resultado = await estoqueService.retirarEstoque(produto, quantidade);

            return res.status(200).json({ mensagem: 'Produto retirado com sucesso' });

        } catch (error) {

            return res.status(error.status || 500).json({ mensagem: error.mensagem || 'Erro interno do servidor' });
        }
    },

    async listar(req, res) {

        try {

            const resultado = await estoqueService.listar();

            return res.status(200).json(resultado);

        } catch (error) {

            return res.status( error.status || 500).json({ mensagem: error.mensagem || 'Erro interno do servidor', stack: error.stack });
        }
    },
}