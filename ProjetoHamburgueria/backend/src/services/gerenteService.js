import { gerenteRepository } from '../repositories/gerenteRepository.js';
import { criarErro } from '../utils/criarErro.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const gerenteService = {

    async login (email, senha) {
        const gerente = await gerenteRepository.buscarPorEmail(email);

        if (!gerente) {
            throw criarErro('Email ou senha inválidos', 401);
        }

        const senhaValida = await bcrypt.compare(senha, gerente.senha);

        if (!senhaValida) {
            throw criarErro('Email ou senha inválidos',  401);
        }

        const token = jwt.sign(
            { id: gerente.id, email: gerente.email },
            process.env.JWT_SECRET,
            { expiresIn: '8h' }
        );

        return {
            token,
            gerente: {
                id: gerente.id,
                nome: gerente.nome,
                email: gerente.email,
            },
        };
    },
};