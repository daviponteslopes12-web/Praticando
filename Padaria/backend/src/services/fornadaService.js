import { fornadaRepository } from '../repositories/fornadaRepository.js';

export const fornadaService = {

    async cadastrar(conteudo, quantidade) {

        if (!conteudo || conteudo.trim() === '') {
            throw { status: 400, mensagem: 'conteudo é obrigatório' };
        }

        if (!quantidade || quantidade <= 0) {
            throw { status: 400, mensagem: 'quantidade inválida' };
        }

        const resultado = await fornadaRepository.cadastrar(conteudo, quantidade);

        return resultado;
    },

    async listar() {
        return await fornadaRepository.listarTodas();
    },

    async buscarPorStatus(status) {

        const statusValidos = ['esperando', 'preparando', 'pronta'];

        if (!statusValidos.includes(status)) {
            throw { status: 400, mensagem: 'Status inválido. Use: esperando, preparando ou pronta'};
        }

        const resultado = await fornadaRepository.buscarPorStatus(status);

        return resultado;
    }
};