import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import comboApi from '../api/comboApi.js'; 

export function useListarCombos() {
    return useQuery({
        queryKey: ['combos'],
        queryFn: comboApi.listarTodos,
    });
}

export function useListarCombosAtivos() {
    return useQuery({
        queryKey: ['combosAtivos'],
        queryFn: comboApi.listarAtivos,
    });
}

export function useCadastrarCombo() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: comboApi.cadastrar,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['combos'] });
            queryClient.invalidateQueries({ queryKey: ['combosAtivos'] });
        },
    });
}

export function useEditarCombo() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, dados }) => comboApi.editar(id, dados),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['combos'] });
            queryClient.invalidateQueries({ queryKey: ['combosAtivos'] });
        },
    });
}

export function useDeletarCombo() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: comboApi.deletar,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['combos'] });
            queryClient.invalidateQueries({ queryKey: ['combosAtivos'] });
        },
    });
}

export function useAlternarAtivoCombo() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, ativo }) => comboApi.alternarAtivo(id, ativo),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['combos'] });
            queryClient.invalidateQueries({ queryKey: ['combosAtivos'] });
        },
    });
}

