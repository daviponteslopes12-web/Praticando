import { pool } from '../configs/db.js';

// vamos cadastrar uma fornada,  

export const fornadaRepository = {

    async cadastrar(conteudo, quantidade) {
        const [resultado] = await pool.query(`
            INSERT INTO fornada
            (conteudo, quantidade)
            VALUES (?, ?)
            `, [conteudo, quantidade]);

        return { id: resultado.insertId, conteudo, quantidade, status: 'esperando' };
    },

    async listarTodas() {
        const [rows] = await pool.query(`
            SELECT * 
            FROM fornada 
            ORDER BY criado_em DESC`);

        return rows;
    },

    async buscarPorStatus(status) {
        const [rows] = await pool.query(`
            SELECT * 
            FROM fornada
            WHERE status = ?
            `, [status]);

        return rows;
    },

    async atualizarStatus(id, novoStatus) {
        const [resultado] = await pool.query(`
            UPDATE fornada 
            SET status = ?,
            ultima_atualizacao = CURRENT_TIMESTAMP
            WHERE id = ?
            `, [novoStatus, id]);

        return { mensagem: 'Atualizado com sucesso' };
    },

    async buscarParaAtualizar(statusAtual, minutosDesdeAtualizacao) {
        const [rows] = await pool.query(`
            SELECT * 
            FROM fornada
            WHERE status = ?
            AND ultima_atualizacao <= NOW() - INTERVAL ? MINUTE
            `, [statusAtual, minutosDesdeAtualizacao]);

        return rows;
    }



}