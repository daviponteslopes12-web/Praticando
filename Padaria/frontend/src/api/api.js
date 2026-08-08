import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_BACK_URL,
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        const mensagem = error.response?.data?.mensagem || 'Erro inesperado no servidor';

        console.error(`[API] ${error.response?.status || 500}: ${mensagem}`);

        return Promise.reject({
            status: error.response?.status || 500,
            mensagem,
        });
    }
);