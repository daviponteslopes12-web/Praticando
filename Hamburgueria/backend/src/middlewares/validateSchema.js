

function validarSchema(schema) {
    return (req, res, next) => {
        try {
            schema.parse(req.body);
            next();
        } catch(erro) {
            return res.status(400).json({
                mensagem: 'Dados inválidos',
                detalhes: erro.errors.map((e) => ({
                    campo: e.path[0],
                    mensagem: e.message,
                })),
            });
        }
    };
}

export default validarSchema;