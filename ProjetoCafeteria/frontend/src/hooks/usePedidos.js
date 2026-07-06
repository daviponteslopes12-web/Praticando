import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { pedidoService } from '../services/pedidoService.js';

// Uso do useQuery para "fisgar" os dados
// Para a próxima
export function usePedidos() {
    return useQuery({
        queryKey: ['pedidos'],
        queryFn: pedidoService.listar,
    });
}

// useMutation (como useEffect) usado para POST, PUT
export function useCadastrarPedido() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: pedidoService.cadastrar, // Quando isso tiver alteração (cadastrar pedido)
        onSuccess: () => { // Quando funcionar
            queryClient.invalidateQueries({ queryKey: ['pedidos'] }); // Usa usePedidos (querykey)
        },
    });
}

export function useMarcarPreparando() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: pedidoService.marcarPreparando,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['pedidos'] });
        },
    });
}

export function useMarcarPronto() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: pedidoService.marcarPronto,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['pedidos'] });
        },
    });
}

export function useCancelarPedido() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: pedidoService.cancelar,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['pedidos'] });
        },
    });
}

export function useRetirarPedido() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: pedidoService.retirar,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['pedidos'] });
        },
    });
}