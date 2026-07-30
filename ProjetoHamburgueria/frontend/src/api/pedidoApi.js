import api from './api.js';

const pedidoApi = {
    
    async criar(dados) {
        const resposta = await api.post('/pedidos', dados);
        return resposta.data;
    },
};

export default pedidoApi;