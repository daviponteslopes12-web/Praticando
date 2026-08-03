import { useState } from 'react';
import { formatarPreco } from '../utils/formatar.js'; 

function FormCombo({ combo, produtos, onSalvar, onCancelar }) {
    const [form, setForm] = useState({
        nome: combo?.nome || '',
        preco: combo?.preco || '',
        produtos: combo?.produtos?.map((p) => p.id) || [],
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    function toggleProduto(id) {
        setForm((prev) => {
            if(prev.produtos.includes(id)) {
                return { ...prev, produtos: prev.produtos.filter((p) => p !== id) };
            }
            return { ...prev, produtos: [...prev.produtos, id] };
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSalvar({
            ...form,
            preco: Number(form.preco),
        });
    }

    return (
        <div>
            
        </div>
    )
}

export default FormCombo;