import { api } from '../api/api.js';

export const estoqueService = {

    async listar() {
        const { data } = await api.get('/estoque');
        return data;
    },

    async cadastrar(produto) {
        const { data } = await api.post('/estoque', { produto });
        return data;
    },

    async adicionar(produto, quantidade) {
        const { data } = await api.patch('/estoque/adicionar', { produto, quantidade });
        return data;
    },

    async retirar(produto, quantidade) {
        const { data } = await api.patch('/estoque/retirar', { produto, quantidade });
        return data;
    }
};