import { useState } from "react";
import { useEstoque } from "../../hooks/useEstoque.js";

export default function Estoque() {
  const { listar, cadastrar, adicionar, retirar } = useEstoque();

  const [produto, setProduto] = useState("");
  const [produtoAdd, setProdutoAdd] = useState("");
  const [quantidadeAdd, setQuantidadeAdd] = useState("");
  const [produtoRetirar, setProdutoRetirar] = useState("");
  const [quantidadeRetirar, setQuantidadeRetirar] = useState("");

  function handleCadastrar(e) {
    e.preventDefault();
    cadastrar.mutate(produto, { onSuccess: () => setProduto("") });
  }

  function handleAdicionar(e) {
    e.preventDefault();
    adicionar.mutate(
      { produto: produtoAdd, quantidade: Number(quantidadeAdd) },
      { onSuccess: () => { setProdutoAdd(""); setQuantidadeAdd(""); } }
    );
  }

  function handleRetirar(e) {
    e.preventDefault();
    retirar.mutate(
      { produto: produtoRetirar, quantidade: Number(quantidadeRetirar) },
      { onSuccess: () => { setProdutoRetirar(""); setQuantidadeRetirar(""); } }
    );
  }

  if (listar.isLoading) return <p className="text-stone-500 text-center">Carregando estoque...</p>;
  if (listar.isError) return <p className="text-red-400 text-center">Erro: {listar.error?.mensagem}</p>;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-stone-100">Estoque</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Cadastrar */}
        <form onSubmit={handleCadastrar} className="bg-stone-900 border border-stone-800 rounded-xl p-5 space-y-3">
          <h3 className="font-semibold text-orange-400">Novo Produto</h3>
          <input
            type="text"
            value={produto}
            onChange={(e) => setProduto(e.target.value)}
            placeholder="Nome do produto"
            className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-sm text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-orange-500/50 transition"
            required
          />
          <button type="submit" disabled={cadastrar.isPending} className="w-full bg-orange-500 hover:bg-orange-400 text-stone-950 font-semibold py-2 rounded-lg transition disabled:opacity-50 cursor-pointer">
            {cadastrar.isPending ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>

        {/* Adicionar */}
        <form onSubmit={handleAdicionar} className="bg-stone-900 border border-stone-800 rounded-xl p-5 space-y-3">
          <h3 className="font-semibold text-emerald-400">Adicionar</h3>
          <select 
          value={produtoAdd}
          onChange={(e) => setProdutoAdd(e.target.value)}
          className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-sm text-stone-200 focus:outline-none focus:border-emerald-500/50 transition cursor-pointer"
          required>
            <option value="">Selecione o produto</option>
            {listar.data?.map((item) => (
              <option key={item.id} value={item.produto}>
                {item.produto}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={quantidadeAdd}
            onChange={(e) => setQuantidadeAdd(e.target.value)}
            placeholder="Quantidade"
            className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-sm text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-emerald-500/50 transition"
            required
          />
          <button type="submit" disabled={adicionar.isPending} className="w-full bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 font-semibold py-2 rounded-lg border border-emerald-600/30 transition disabled:opacity-50 cursor-pointer">
            {adicionar.isPending ? "Adicionando..." : "Adicionar"}
          </button>
        </form>

        {/* Retirar */}
        <form onSubmit={handleRetirar} className="bg-stone-900 border border-stone-800 rounded-xl p-5 space-y-3">
          <h3 className="font-semibold text-red-400">Retirar</h3>
          <select 
          value={produtoRetirar}
          onChange={(e) => setProdutoRetirar(e.target.value)}
          className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-sm text-stone-200 focus:outline-none focus:border-emerald-500/50 transition cursor-pointer"
          required>
            <option value="">Selecione o produto</option>
            {listar.data?.map((item) => (
              <option key={item.id} value={item.produto}>
                {item.produto}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={quantidadeRetirar}
            onChange={(e) => setQuantidadeRetirar(e.target.value)}
            placeholder="Quantidade"
            className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-sm text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-red-500/50 transition"
            required
          />
          <button type="submit" disabled={retirar.isPending} className="w-full bg-red-600/20 hover:bg-red-600/30 text-red-400 font-semibold py-2 rounded-lg border border-red-600/30 transition disabled:opacity-50 cursor-pointer">
            {retirar.isPending ? "Retirando..." : "Retirar"}
          </button>
        </form>
      </div>

      {/* Tabela */}
      <div className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-stone-800">
              <th className="px-5 py-4 text-stone-500 text-xs uppercase">Produto</th>
              <th className="px-5 py-4 text-stone-500 text-xs uppercase text-right">Quantidade</th>
            </tr>
          </thead>
          <tbody>
            {listar.data?.map((item) => (
              <tr key={item.id} className="border-b border-stone-800/50 last:border-0 hover:bg-stone-800/30 transition">
                <td className="px-5 py-3 font-medium">{item.produto}</td>
                <td className="px-5 py-3 text-right font-mono text-stone-400">{item.quantidade}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {listar.data?.length === 0 && (
          <p className="px-5 py-10 text-center text-stone-600 text-sm">Nenhum produto cadastrado</p>
        )}
      </div>
    </div>
  );
}