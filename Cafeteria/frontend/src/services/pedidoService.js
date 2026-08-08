import { api } from '../api/api.js';

export const pedidoService = {

    // Uso de funções dentro de um objeto
    listar: async () => {
        const { data } = await api.get('/pedidos');
        return data;
    },

    cadastrar: async (pedido) => {
        const { data } = await api.post('/pedidos', pedido);
        return data;
    },

    marcarPreparando: async (id) => {
        const { data } = await api.put(`/pedidos/${id}/preparando`);
        return data;
    },

    marcarPronto: async (id) => {
        const { data } = await api.put(`/pedidos/${id}/pronto`);
        return data;
    },

    cancelar: async (id) => {
        const { data } = await api.put(`/pedidos/${id}/cancelar`);
        return data;
    },

    retirar: async (id) => {
        const { data } = await api.put(`/pedidos/${id}/retirar`);
        return data;
    },

};