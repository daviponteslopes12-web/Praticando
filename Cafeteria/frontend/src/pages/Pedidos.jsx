import { Formulario } from "../components/Formulario.jsx";
import { style } from "../../style.js";
import {
  usePedidos,
  useMarcarPreparando,
  useMarcarPronto,
  useCancelarPedido,
  useRetirarPedido,
} from "../hooks/usePedidos.js";

export function Pedidos() {
  const { data: pedidos, isLoading, isError } = usePedidos();
  const preparando = useMarcarPreparando();
  const pronto = useMarcarPronto();
  const cancelar = useCancelarPedido();
  const retirar = useRetirarPedido();

  if (isLoading) return <p>Carregando pedidos...</p>;
  if (isError) return <p>Erro ao carregar pedidos.</p>;

  return (
    <div className={style.body}>
      <Formulario />

      <h1 className={`${style.titulo} border-t-2`}>Pedidos</h1>

      {pedidos.map((pedido) => (
        <div key={pedido.id} className={style.card}>
          <p className={style.p}>
            <strong>Cliente:</strong> {pedido.nome}
          </p>
          <p className={style.p}>
            <strong>Número do pedido:</strong> {pedido.id}
          </p>
          <p className={style.p}>
            <strong>Status:</strong> {pedido.status_pedido}
          </p>

          <button className={`${style.cardButton} bg-yellow-500 hover:bg-yellow-600 transition duration-300`} onClick={() => preparando.mutate(pedido.id)}>Marcar Preparado</button>
          <button className={`${style.cardButton} bg-red-700 hover:bg-red-800 transition duration-300 `} onClick={() => cancelar.mutate(pedido.id)}>Cancelar Pedido</button>
          <button className={`${style.cardButton} bg-green-700 hover:bg-green-800 transition duration-300 `} onClick={() => retirar.mutate(pedido.id)}>Retirar Pedido</button>
          <button className={`${style.cardButton} bg-gray-200 hover:bg-gray-400 transition duration-300 `} onClick={() => pronto.mutate(pedido.id)}>Marcar Pronto</button>
        </div>
      ))}
    </div>
  );
}
