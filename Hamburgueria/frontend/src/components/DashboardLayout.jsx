import { useState } from 'react';
import Sidebar from './Sidebar.jsx';

function DashboardLayout({ modo, children, onAbaChange }) {
    const [abaAtiva, setAbaAtiva] = useState(modo === 'gerente' ? 'dashboard' : 'hamburgueria');

    function handleAbaChange(aba) {
        setAbaAtiva(aba);
        if (onAbaChange) {
            onAbaChange(aba);
        }
    }

    return (
        <div className=''>
            <Sidebar modo={modo} abaAtiva={abaAtiva} onAbaChange={handleAbaChange} />
            <main className=''>
                {children(abaAtiva)}
            </main>
        </div>
    );
}

export default DashboardLayout;