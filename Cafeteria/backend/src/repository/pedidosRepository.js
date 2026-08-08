import { pool } from '../config/db.js';

export const pedidosRepository = {

    // Listar pedidos
    async listarPedidos() {

        const [pedidos] = await pool.query(`
                SELECT * 
                FROM pedidos
                WHERE status_pedido IN (
                    'fila',
                    'preparando', 
                    'pronto')
                ORDER BY atualizado_em DESC
            `);

        return pedidos;
    },


    // Cadastrar pedido
    async cadastrarPedido(nome, cafe, acompanhamento, valor_total) {

        const [resultado] = await pool.query(`
            INSERT INTO pedidos ( 
                nome,
                cafe, 
                acompanhamento, 
                valor_total
                ) VALUES (?, ?, ?, ?) `, [nome, cafe, acompanhamento, valor_total]);

        return resultado;
    },

    // Marcar como preparando
    async marcarPedidoPreparando(id) {

        const [resultado] = await pool.query(`
            UPDATE pedidos
            SET status_pedido = 'preparando'
            WHERE id = ?
            `, [id]);

        return resultado;
    },


    // Marcar como Pronto
    async marcarPedidoPronto(id) {

        const [resultado] = await pool.query(`
            UPDATE pedidos
            SET status_pedido = 'pronto'
            WHERE id = ?
            `, [id]);

        return resultado;
    },

    // Cancelar pedido
    async cancelarPedido(id) {

        const [resultado] = await pool.query(`
            UPDATE pedidos
            SET status_pedido = 'cancelado'
            WHERE id = ?
            `, [id]);

        return resultado;
    },

    // Retirar pedido
    async retirarPedido(id) {

        const [resultado] = await pool.query(`
            UPDATE pedidos
            SET status_pedido = 'retirado'
            WHERE id = ?
            `, [id]);

        return resultado;
    }
}