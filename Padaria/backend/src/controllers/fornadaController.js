import { fornadaService } from "../services/fornadaService.js";

export const fornadaController = {

    async cadastrar(req, res) {
        try {

            const { conteudo, quantidade } = req.body;
            
            const resultado = await fornadaService.cadastrar(conteudo, quantidade);

            return res.status(201).json(resultado);

        } catch (error) {
            return res.status(error.status || 500).json({ mensagem: error.mensagem || 'Erro interno do servidor' });
        }
    },

    async listar(req, res) {
        try {
            const resultado = await fornadaService.listar();

            return res.status(200).json(resultado);

        } catch (error) {
            return res.status(error.status || 500).json({ mensagem: error.mensagem || 'Erro interno do servidor' });
        }
    },

    async buscarStatus(req, res) {
        try {
            const { status } = req.params;

            const resultado = await fornadaService.buscarPorStatus(status);

            return res.status(200).json(resultado);

        } catch (error) {
            return res.status(error.status || 500).json({ mensagem: error.mensagem || 'Erro interno do servidor' });
        }
    }
};