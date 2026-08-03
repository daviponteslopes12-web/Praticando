import { useCarrinho } from '../context/useCarrinho.js';
import { formatarPreco } from '../utils/formatar.js';

function CardProduto({ modo, produto, onEditar, onAlternarAtivo }) {
    const { adicionarItem } = useCarrinho();

    function handleAdicionar() {
        adicionarItem({
            id: produto.id,
            tipo: produto.tipo,
            nome: produto.nome,
            preco: produto.preco,
        }) ;
    }

    return (
        <div className={`${!produto.ativo ? 'opacity-50' : ''}`}>
            <div className=''>
                {produto.imagem ? <img src={produto.imagem} alt={produto.name} className=''></img> : <span className=''>Sem imagem</span>}
            </div>

            <h3 className=''>{produto.nome}</h3>
            <p className=''>{produto.descricao}</p>
            <span className=''>
                {formatarPreco(produto.preco)}
            </span>

            {modo === 'cliente' && (
                <button
                onClick={handleAdicionar}
                disabled={!produto.ativo}
                className=''>
                    Adicionar
                </button>
            )}

            {modo === 'gerente' && (
                <div className=''>
                    <button
                    onClick={() => onEditar(produto)}
                    className=''>
                        Editar
                    </button>
                    <button
                    onClick={() => onAlternarAtivo(produto.id, !produto.ativo)}
                    className={`${produto.ativo ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}>
                        {produto.ativo ? 'Desativar' : 'Ativar'}
                    </button>
                </div>
            )}
        </div>
    );
}

export default CardProduto;