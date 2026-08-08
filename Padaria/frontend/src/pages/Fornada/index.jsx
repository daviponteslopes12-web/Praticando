import { useState } from "react";
import { useFornada } from "../../hooks/useFornada.js";

export default function Fornada() {
  const { listar, cadastrar } = useFornada();

  const [conteudo, setConteudo] = useState("");
  const [quantidade, setQuantidade] = useState("");

  const cores = {
    esperando: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
    preparando: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    pronta: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  };

  const label = {
    esperando: "Esperando",
    preparando: "Preparando",
    pronta: "Pronta",
  };

  function handleCadastrar(e) {
    e.preventDefault();
    cadastrar.mutate(
      { conteudo, quantidade: Number(quantidade) },
      { onSuccess: () => { setConteudo(""); setQuantidade(""); } }
    );
  }

  if (listar.isLoading) return <p className="text-stone-500 text-center">Carregando fornadas...</p>;
  if (listar.isError) return <p className="text-red-400 text-center">Erro: {listar.error?.mensagem}</p>;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-stone-100">Fornadas</h1>

      {/* Formulário */}
      <form onSubmit={handleCadastrar} className="bg-stone-900 border border-stone-800 rounded-xl p-5 flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)}
          placeholder="Ex: Pão Francês"
          className="flex-1 bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-sm text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-orange-500/50 transition"
          required
        />
        <input
          type="number"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          placeholder="Qtd"
          className="w-full sm:w-28 bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-sm text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-orange-500/50 transition"
          required
        />
        <button type="submit" disabled={cadastrar.isPending} className="bg-orange-500 hover:bg-orange-400 text-stone-950 font-semibold px-6 py-2 rounded-lg transition disabled:opacity-50 cursor-pointer whitespace-nowrap">
          {cadastrar.isPending ? "Cadastrando..." : "Nova Fornada"}
        </button>
      </form>

      {/* Cards */}
      <div className="grid gap-3">
        {listar.data?.map((fornada) => (
          <div key={fornada.id} className="bg-stone-900 border border-stone-800 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-stone-700 transition">
            <div>
              <p className="font-semibold text-lg text-stone-100">{fornada.conteudo}</p>
              <p className="text-stone-500 text-sm mt-1">{fornada.quantidade} unidades</p>
            </div>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${cores[fornada.status]}`}>
              {label[fornada.status]}
            </span>
          </div>
        ))}
        {listar.data?.length === 0 && (
          <p className="bg-stone-900 border border-stone-800 rounded-xl p-10 text-center text-stone-600 text-sm">
            Nenhuma fornada registrada
          </p>
        )}
      </div>
    </div>
  );
}