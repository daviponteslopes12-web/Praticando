import { Routes, Route } from 'react-router-dom';
import RotaProtegida from './RotaProtegida.jsx';

import Inicial from '../pages/Inicial.jsx';
import PaginaNaoEncontrada from '../pages/PaginaNaoEncontrada.jsx';
import Cardapio from '../pages/cliente/Cardapio.jsx';
import Carrinho from '/pages/cliente/Carrinho.jsx';
import Pagamento from '../pages/cliente/Pagamento.jsx';
import Sucesso from '../pages/cliente/Sucesso.jsx';
import Login from '../pages/gerente/Login.jsx';
import Dashboard from '../gerente/Dashboard.jsx';
import Produtos from '../gerente/Produtos.jsx';
import Combos from '../pages/gerente/Combos,jsx';



function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Inicial />} />
            <Route path='/cardapio' element={<Cardapio />} />
            <Route path='/carrinho' element={<Carrinho />} />
            <Route path='/pagamento' element={<Pagamento />} />
            <Route path='/sucesso' element={<Sucesso />} />

            <Route path='/gerente/login' element={<Login />} />

            <Route element={<RotaProtegida />}>
                <Route path='/gerente/dashboard' element={<Dashboard />} />
                <Route path='/gerente/produtos' element={<Produtos />} />
                <Route path='/gerente/combos' element={<Combos />} />
            </Route>

            <Route path='*' element={<PaginaNaoEncontrada />} />
        </Routes>
    );
}

export default AppRoutes;