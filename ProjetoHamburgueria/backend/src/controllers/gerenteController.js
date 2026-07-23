import { gerenteService } from '../services/gerenteService.js';

export const gerenteController = {

    async login(req, res) {
        const { email, senha } = req.body;

        try {

            const gerente = await gerenteService.login(email, senha);
            res.status(200).json(gerente);
        } catch (erro) {
            console.error("[ERRO] - ", erro);
            res.status(erro.status || 500).json({ mensagem: erro.message || 'Erro interno do servidor. Tente novamente mais tarde!'});
        };
    },
};