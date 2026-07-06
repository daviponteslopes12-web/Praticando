import { z } from 'zod';

export const schemaCadastro = z.object({
    produto: z.string().min(3, 'Mínimo 3 caracteres'),
});

export const schemaAdicionar = z.object({
    produto: z.string().min(3, 'Mínimo 3 caracteres'),
    quantidade: z.int().positive('Valor inválido')
});

export const schemaRetirar = z.object({
    produto: z.string().min(3, 'Mínimo 3 caracteres'),
    quantidade: z.number().int().positive('Quantidade deve ser maior que 0')
});