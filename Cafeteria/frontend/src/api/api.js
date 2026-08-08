// Configurações do axios.
// .env é pego pelo próprio vite, variáveis precisam de VITE_ no começo
import axios from 'axios';



export const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});