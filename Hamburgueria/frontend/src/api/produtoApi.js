import api from './api.js';

const produtoApi = {

    async buscarTodos() {
        const resposta = await api.get('/produto/buscar');
        return resposta.data;
    },

    async buscarAtivos() {
        const resposta = await api.get('/produto/buscarAtivos');
        return resposta.data;
    },

    async cadastrar(dados) {
        const resposta = await api.post('/produto/cadastrar', dados);
        return resposta.data;
    },

    async editar(id, dados) {
        const resposta = await api.patch(`/produto/editar/${id}`, dados);
        return resposta.data;
    },

    async deletar(id) {
        const resposta = await api.delete(`/produto/deletar/${id}`);
        return resposta.data;
    },

    async alternarAtivo(id, ativo) {
        const resposta = await api.patch(`/produto/alternar/${id}`, { ativo });
        return resposta.data;
    },
};

export default produtoApi;