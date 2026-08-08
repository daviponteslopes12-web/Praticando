import jwt from 'jsonwebtoken';
import criarErro from '../utils/criarErro.js';

function autenticacaoMiddleware(req, res, next) {
    const header = req.headers.authorization;

    if (!header || !header.startsWith('Bearer ')) {
        throw criarErro("Token não fornecido", 401);
    }

    const token = header.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.gerente = decoded;
        next();
    } catch (erro) {
        throw criarErro('Token inválido ou expirado', 401);
    }
}

export default autenticacaoMiddleware;