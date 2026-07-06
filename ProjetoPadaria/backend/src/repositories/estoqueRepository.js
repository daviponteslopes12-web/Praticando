import { pool } from '../configs/db.js';

export const estoqueRepository = {

    async cadastrar(produto) {
        const [resultado] = await pool.query(`
            INSERT INTO estoque (produto)
            VALUES (?)
        `, [produto]);

        return resultado.insertId;
    },

    async adicionarEstoque(produto, quantidade) {
        const [resultado] = await pool.query(`
            UPDATE estoque
            SET quantidade = quantidade + ?
            WHERE produto = ?
        `, [quantidade, produto]);

        return resultado.affectedRows;
    },

    async retirar(produto, quantidade) {
        const [resultado] = await pool.query(`
            UPDATE estoque
            SET quantidade = quantidade - ?
            WHERE produto = ?
        `, [quantidade, produto]);

        return resultado.affectedRows;
    },

    async listar() {
        const [rows] = await pool.query(`
            SELECT
                id,
                produto,
                quantidade,
                adicionado_em,
                retirado_em,
                quantidade_retirada
            FROM estoque
        `);

        return rows;
    },

    async buscarProdutoPorNome(produto) {
        const [resultado] = await pool.query(`
            SELECT id
            FROM estoque
            WHERE produto = ?
        `, [produto]);

        return resultado[0] || null;
    }
};