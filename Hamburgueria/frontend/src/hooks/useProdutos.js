import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import produtoApi from '../api/produtoApi.js';

export function useBuscarProdutos() {
    return useQuery({
        queryKey: ['produtos'],
        queryFn: produtoApi.buscarTodos,
    });
}

export function useCadastrarProduto() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: produtoApi.cadastrar,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['produtos'] });
            queryClient.invalidateQueries({ queryKey: ['produtosAtivo'] });
        },
    });
}

export function useEditarProduto() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, dados }) => produtoApi.editar(id, dados),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['produtos'] });
            queryClient.invalidateQueries({ queryKey: ['produtosAtivos'] });
        },
    });
}

export function useDeletarProduto() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: produtoApi.deletar,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['produtos'] });
            queryClient.invalidateQueries({ queryKey: ['produtosAtivos'] });
        },
    });
}

export function useALternarAtivoProduto() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, ativo }) => produtoApi.alternarAtivo(id, ativo),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['produtos'] });
            queryClient.invalidateQueries({ queryKey: ['produtosAAtivos'] });
        },
    });
}