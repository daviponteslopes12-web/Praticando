import api from './api.js';

const comboApi = {
    
    async cadastrar(dados) {
        const resposta = await api.post('/combo/cadastrar', dados);
        return resposta.data;
    },

    async listarTodos() {
        const resposta = await api.get('/combo/listar');
        return resposta.data;
    },

    async listarAtivos() {
        const resposta = await api.get('/combo/listarAtivos');
        return resposta.data;
    },

    async editar(id, dados) {
        const resposta = await api.patch(`/combo/editar/${id}`, dados);
        return resposta.data;
    },

    async deletar(id) {
        const resposta = await api.delete(`/combo/deletar/${id}`);
        return resposta.data;
    },

    async alternarAtivo(id, ativo) {
        const resposta = await api.patch(`/combo/alternar/${id}`, { ativo });
        return resposta.data;
    },
};

export default comboApi;