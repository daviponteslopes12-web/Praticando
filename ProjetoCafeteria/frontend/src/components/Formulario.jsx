import { useState } from "react";
import { useCadastrarPedido } from "../hooks/usePedidos.js";
import { style } from "../../style.js";

export function Formulario() {
  const [nome, setNome] = useState("");
  const [cafe, setCafe] = useState("");
  const [acompanhamento, setAcompanhamento] = useState("");
  const [valorTotal, setValorTotal] = useState("");
  const cadastrar = useCadastrarPedido();

  const handleSubmit = (e) => {
    e.preventDefault();

    cadastrar.mutate(
      {
        nome,
        cafe,
        acompanhamento,
        valor_total: Number(valorTotal),
      },
      {
        onSuccess: () => {
          setNome("");
          setCafe("");
          setAcompanhamento("");
          setValorTotal("");

          setTimeout(() => {
            cadastrar.reset();
          }, 3000)
        },

        onError: () => {
            setTimeout(() => {
                cadastrar.reset();
            }, 3000)
        }
      },
    );
  };

  return (
    <div className={style.body}>
      <h1 className={style.titulo}>Novo Pedido</h1>

      <form onSubmit={handleSubmit} className={style.form}>
        <p className={`${style.titulo} text-white`}>Cadastrar Pedido</p>
        <div>
          <label className={style.label}>Nome do Cliente</label>
          <input
            className={style.input}
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            placeholder="Nome do cliente"
          />
        </div>
        <div>
          <label className={style.label}>Café</label>
          <select
            className={style.input}
            value={cafe}
            onChange={(e) => setCafe(e.target.value)}
            required
          >
            <option value="">Selecione um café</option>
            <option value="espresso">Espresso</option>
            <option value="americano">Americano</option>
            <option value="especial">Especial</option>
          </select>
        </div>

        <div>
          <label className={style.label}>Acompanhamentos</label>
          <select
            className={style.input}
            value={acompanhamento}
            onChange={(e) => setAcompanhamento(e.target.value)}
          >
            <option value="">Selecione um acompanhamento</option>
            <option value="pao de queijo">Pão de queijo</option>
            <option value="sanduiche">Sanduíche</option>
            <option value="bolo">Bolo</option>
          </select>
        </div>
        <div>
          <label className={style.label}>Valor Total</label>
          <input
            className={style.input}
            type="number"
            step="0.01"
            value={valorTotal}
            onChange={(e) => setValorTotal(e.target.value)}
            placeholder="Ex: 15.90"
            required
          />
        </div>
        <div>
          <button
            className={style.button}
            type="submit"
            disabled={cadastrar.isPending}
          >
            {cadastrar.isPending ? "Cadastrando..." : "Cadastrar Pedido"}
          </button>
        </div>
      </form>

      {cadastrar.isError && <p className={style.errorMessage} >Erro ao cadastrar pedido.</p>}
      {cadastrar.isSuccess && <p className={style.successMessage}>Pedido cadastrado com sucesso!</p>}
    </div>
  );
}
