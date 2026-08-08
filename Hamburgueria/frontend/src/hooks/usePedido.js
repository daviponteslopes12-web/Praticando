import { useMutation } from '@tanstack/react-query';
import pedidoApi from '../api/pedidoApi.js';

export function useCriarPedido() {
    return useMutation({
        mutationFn: pedidoApi.criar,
    });
}