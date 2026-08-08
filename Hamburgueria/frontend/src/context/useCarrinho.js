import { useContext } from 'react';
import CarrinhoContext from '../CarrinhoContext.jsx'


// Acessa o contexto de qualquer lugar
export function useCarrinho() {
    const context = useContext(CarrinhoContext);

    if (!context) {
        throw new Error('useCarrinho deve ser usado dentro de um CarrinhoProvider');
    }

    return context;
}