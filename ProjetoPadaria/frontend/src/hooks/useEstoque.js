import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { estoqueService } from '../services/estoqueService.js';

export function useEstoque() {

    const queryClient = useQueryClient();

    const listar = useQuery({
        queryKey: ['estoque'],
        queryFn: estoqueService.listar,
    });

    const cadastrar = useMutation({
        mutationFn: (produto) => estoqueService.cadastrar(produto),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['estoque'] });
        },
    });

    const adicionar = useMutation({
        mutationFn: ({ produto, quantidade }) => estoqueService.adicionar(produto, quantidade),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['estoque'] });
        },
    });

    const retirar = useMutation({
        mutationFn: ({ produto, quantidade }) => estoqueService.retirar(produto, quantidade),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['estoque'] });
        },
    });

    return { listar, cadastrar, adicionar, retirar };
}

/*
useQuery -> busca dados e cacheia, usar em GET-listar, buscar
useMutation -> Envia dados ao servidor, usar em POST/PATCH-criar, atualizar
invalidateQueries -> Diz "esses dados ficaram velhos, busca denovo" -> usar depois do um mutation dar certo

mutationFn: ({ atributos }) => metodo.propriedade(atributos) -> envia dados para o backend
queryClient.invalidateQueries({ queryKey: ['estoque'] }) -> atualiza dados do cache

*/