import { Navigate, Outlet } from 'react-router-dom';

function RotaProtegida() {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/gerente/login" />;
    }

    return <Outlet />
}

export default RotaProtegida;