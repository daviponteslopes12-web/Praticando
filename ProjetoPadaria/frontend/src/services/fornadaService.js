import { api } from '../api/api.js';

export const fornadaService = {

    async listar() {
        const { data } = await api.get('/fornada');
        return data;
    },

    async cadastrar(conteudo, quantidade) {
        const { data } = await api.post('/fornada', { conteudo, quantidade });
        return data;
    },

    async buscarPorStatus(status) {
        const { data } = await api.get(`/fornada/status/${status}`);
        return data;
    }
};