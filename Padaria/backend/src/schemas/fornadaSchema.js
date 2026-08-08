import { z } from 'zod';

export const schemaCadastro = z.object({
    conteudo: z.string().min(3, 'Mínimo 3 caracteres'),
    quantidade: z.number().int().positive('Quantidade deve ser maior que 0'),
});