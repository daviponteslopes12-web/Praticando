import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fornadaService } from '../services/fornadaService.js';

export function useFornada(statusFiltro) {

    // gerencia o cache
    const queryClient = useQueryClient();

    const listar = useQuery({
        queryKey: ['fornadas'],
        queryFn: fornadaService.listar,
    });

    const buscarPorStatus = useQuery({
        queryKey: ['fornadas', statusFiltro],
        queryFn: () => fornadaService.buscarPorStatus(statusFiltro),
        enabled: !!statusFiltro, // tem que ter filtro
    });

    const cadastrar = useMutation({
        mutationFn: ({ conteudo, quantidade }) => fornadaService.cadastrar(conteudo, quantidade),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['fornadas'] });
        },
    });

    return {  listar, buscarPorStatus, cadastrar };
}
