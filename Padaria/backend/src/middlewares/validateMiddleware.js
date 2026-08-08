export function validarSchema(schema) {

    return (req, res, next) => {

        const resultado = schema.safeParse(req.body);

        if (!resultado.success) {

            return res.status(400).json({
                mensagem: 'Dados inválidos.',
                error: resultado.error.issues, // Exibir todos os erros que o schema lançou
            });
        }

        req.body = resultado.data;
        next();
    };
}