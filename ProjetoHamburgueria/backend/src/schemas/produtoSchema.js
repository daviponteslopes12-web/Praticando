import { z } from 'zod';

export const cadastrarProdutoSchema = z.object({
    nome: z
        .string()
        .min(2, "Nome com no mínimo 2 caracteres")
        .max(100, "Nome deve ter no máximo 100 caracteres")
        .trim(),
    descricao: z
        .string()
        .max(500, 'Descrição muito longa'),
    preco: z
        .number()
        .positive("Preço deve ser positivo"),
    categoria: z
        .enum(['hamburguer', 'bebida', 'acompanhamento', 'sobremesa'], {
            errorMap: () => ({ message: 'Categoria inválida' }),
        }),
    imagem: z
        .string()
        .max(255, 'URL muito longa')
        .optional(),
});


export const editarProdutoSchema = z.object({
    nome: z
        .string()
        .min(2, 'Nome deve ter no mínimo 2 caracteres')
        .max(100, 'Nome deve ter no máximo 100 caracteres')
        .trim()
        .optional(),
    descricao: z
        .string()
        .max(500, 'Descrição muito longa')
        .trim()
        .optional(),
    preco: z
        .number()
        .positive('Preço deve ser positivo')
        .optional(),
    categoria: z
        .enum(['hamburguer', 'bebida', 'acompanhamento', 'sobremesa'], {
            errorMap: () => ({ mensagem: 'Categoria inválida' }),
        })
        .optional(),
    imagem: z
        .string()
        .min(255, 'URL muito longa')
        .optional(),
});


