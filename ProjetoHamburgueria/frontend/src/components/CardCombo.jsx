import { useCarrinho } from '../context/useCarrinho.js';
import { formatarPreco } from '../utils/formatar.js';

function CardCombo({ modo, combo, onEditar, onAlternarAtivo, onDeletar }) {
    const { adicionarItem } = useCarrinho();
    
    function handleAdicionar() {
        adicionarItem({
            id: combo.id,
            tipo: 'combo',
            nome: combo.nome,
            preco: combo.preco,
        }) ;
    }

    return (
        <div className={`${!combo.ativo ? 'opacity-50' : ''}`}>
            <div className=''>
                <h3 className=''>{combo.nome}</h3>
                <span className=''>
                    {formatarPreco(combo.preco)}
                </span>
            </div>

            <ul className=''>
                {combo.produtos?.map((produto) => (
                    <li key={produto.id} className=''>
                        🟣 {produto.nome}
                    </li>
                ))}
            </ul>

            {modo === 'cliente' && (
                <button
                onClick={handleAdicionar}
                disabled={!combo.ativo}
                className=''>
                    Adicionar
                </button>
            )}

            {modo === 'gerente' && (
                <div className=''>
                    <button
                    onClick={() => onEditar(combo)}
                    className=''>
                        Editar
                    </button>
                    <button
                    onClick={() => onDeletar(combo.id)}
                    className=''>
                        Deletar
                    </button>
                </div>
            )}
        </div>
    );
} 

export default CardCombo;