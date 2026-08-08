import { useState } from 'react';

function FormProduto({ produto, onSalvar, onCancelar }) {
    const [form, setForm] = useState({
        nome: produto?.nome || '',
        descricao: produto?.descricao || '',
        preco: produto?.preco || '',
        categoria: produto?.categoria || '',
        imagem: produto?.imagem || '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSalvar({
            ...form,
            preco: Number(form.preco),
        });
    }

    return (
        <form onSubmit={handleSubmit} className=''>
            <h2 className=''>
                {produto ? 'Editar Produto' : 'Cadastrar Produto'}
            </h2>

            <div>
                <label className=''>Nome</label>
                <input
                    type="text"
                    name='nome'
                    value={form.nome}
                    onChange={handleChange}
                    required
                    className=''
                    placeholder='Nome do produto' />
            </div>
            <div>
                <label className=''>Descrição</label>
                <textarea
                    name="descricao"
                    value={form.descricao}
                    onChange={handleChange}
                    className=''
                    placeholder='Descrição do produto'
                    rows="3" />
            </div>
            <div>
                <label className=''>Preço</label>
                <input
                    type='number'
                    name="preco"
                    value={form.preco}
                    onChange={handleChange}
                    required
                    min={0.01}
                    step={0.01}
                    placeholder='0.00'
                    className=''
                />
            </div>
            <div>
                <label className=''>Categoria</label>
                <select
                name='categoria'
                value={form.categoria}
                onChange={handleChange}
                className=''>
                    <option value="hamburguer">Hambúrguer</option>
                    <option value="bebida">Bebida</option>
                    <option value="acompanhamento">Acompanhamento</option>
                    <option value="sobremesa">Sobremesa</option>
                </select>
            </div>
            <div>
                <label className=''>URL da Imagem</label>
                <input
                    type="text"
                    name='imagem'
                    value={form.imagem}
                    onChange={handleChange}
                    className=''
                    placeholder='https://exemplo.com/imagem.jpg' />
            </div>
            <div className=''>
                <button
                type='button'
                onClick={onCancelar}
                className=''>
                    Cancelar
                </button>
                <button
                type='submit'
                className=''>
                    {produto ? 'Salvar' : 'Cadastrar'}
                </button>
            </div>
        </form>
    );
}

export default FormProduto;