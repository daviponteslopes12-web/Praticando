import api from './api.js';

const gerenteApi = {

    async login(email, senha) {
        const resposta = await api.post('/gerente/login', { email, senha });

        return resposta.data;
    },
};

export default gerenteApi;