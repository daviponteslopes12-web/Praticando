import { useNavigate } from 'react-router-dom';
import { useLogout } from '../hooks/useGerente.js';

function Sidebar({ modo, abaAtiva, onAbaChange }) {
    const navigate = useNavigate();
    const { logout } = useLogout();

    const categorias = [
        { id: 'hamburguer', label: 'Hamburguer' },
        { id: 'bebida', label: 'Bebidas' },
        { id: 'acompanhamento', label: 'Acompanhamentos' },
        { id: 'sobremesa', label: 'Sobremesas' },
        { id: 'combos', label: 'Combos' },
    ];
    
    return (
        <aside className="">
            <div className="">
                <h1>
                    {modo === 'gerente' ? 'Painel Gerente' : 'Hamburgueria'}
                </h1>
            </div>

            <nav className="">
                {modo === 'gerente' && (
                    <button
                    onClick={() => onAbaChange('dashboard')}
                    className={` ${abaAtiva === 'dashboard' ? 'bg-gray-700 font-bold' : 'hover:bg-gray-700' }`}>
                        Dashboard
                    </button>
                )}

                {categorias.map((cat) => (
                    <button
                    key={cat.id}
                    onClick={() => onAbaChange(cat.id)}
                    className={` ${abaAtiva === cat.id ? 'bg-gray-700 font-bold' : 'hover:bg-gray-700'}`}>
                        {cat.label}
                    </button>
                ))}
            </nav>

            <div className=''>
                {modo === 'gerente' ? (
                    <button 
                    onClick={logout}
                    className=''>
                        Logout
                    </button>
                ) : (
                    <button
                    onClick={() => navigate('/gerente/login')}
                    className=''>
                        Área do Gerente
                    </button>
                )}
            </div>
        </aside>
    );
}

export default Sidebar;