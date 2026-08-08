import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import gerenteApi from '../api/gerenteApi.js';

export function useLogin() {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: ({ email, senha }) => gerenteApi.login(email, senha),
        onSuccess: (data) => {
            localStorage.setItem('token', data.token);
            localStorage.setItem('gerente', JSON.stringify(data.gerente));
            navigate('/gerente/dashboard');
        },
    });

}

export function useLogout() {
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('gerente');
        navigate('/gerente/login');
    }

    return { logout };
}