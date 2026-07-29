import { z } from 'zod';

export const cadastrarComboSchema = z.object({
    nome: z
        .string()
        .min(2, 'Nome deve ter no mínimo 2 caracteres')
        .max(100, 'Nome deve ter no máximo 100 caracteres')
        .trim(),
    preco: z
        .number()
        .positive('Preço deve ser positivo'),
    produtos: z
        .array(z.number().int().positive())
        .min(1, 'Combo deve ter pelo menos 1 produto'),
});

export const editarComboSchema = z.object({
    nome: z
        .string()
        .min(2, 'Nome deve ter no mínimo 2 caracteres')
        .max(100, 'Nome deve ter no máximo 100 caracteres')
        .trim()
        .optional(),
    preco: z
        .number()
        .positive('Preço deve ser positivo')
        .optional(),
    produtos: z
        .array(z.number().int().positive())
        .min(1, 'Combo deve ter pelo menos 1 produto')
        .optional(),
});