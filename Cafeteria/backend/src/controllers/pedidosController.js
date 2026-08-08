import { pedidosRepository } from '../repository/pedidosRepository.js';

export const pedidosController = {

    // Listar pedidos
    async listarPedidos(req, res) {

        try {

            const pedidos = await pedidosRepository.listarPedidos();

            return res.status(200).json(pedidos);

        } catch (error) {

            console.error(error);

            return res.status(500).json({ erro: "Erro ao listar pedidos" });
        }
    },



    // Cadastrar pedido
    async cadastrarPedido(req, res) {
        
        try {
            const {nome, cafe, acompanhamento, valor_total} = req.body;
            
            const resultado = await pedidosRepository.cadastrarPedido(nome, cafe, acompanhamento, valor_total );
            return res.status(201).json({ mensagem: "✅Pedido cadastrado com sucesso", pedido: resultado.insertId });

        } catch (error) {
            
            console.error(error);

            return res.status(500).json({ erro: "Erro ao cadastrar pedido" });
        }
    },
    
    // Marcar como preparando
    async marcarPedidoPreparando(req, res) {

        try {

            const { id } = req.params;

            await pedidosRepository.marcarPedidoPreparando(id);

            return res.status(200).json({ mensagem: "Pedido marcado como preparando" });

        } catch (error) {

            console.error(error);

            return res.status(500).json({ erro: "Erro ao marcar pedido como preparando" });
        }
    },



    // Marcar como pronto
    async marcarPedidoPronto(req, res) {

        try {

            const { id } = req.params;

            await pedidosRepository.marcarPedidoPronto(id);

            return res.status(200).json({ mensagem: "Pedido marcado como pronto" });

        } catch (error) {

            console.error(error);

            return res.status(500).json({ erro: "Erro ao marcar pedido como pronto" });
        }
    },




    // Cancelar pedido
    async cancelarPedido(req, res) {

        try {

            const  { id } = req.params;

            await pedidosRepository.cancelarPedido(id);

            return res.status(200).json({ mensagem: "Pedido cancelado" });

        } catch (error) {

            console.error(error);

            return res.status(500).json({ erro: "Erro ao cancelar pedido" });
        }
    },

    

    // Retirar pedido
    async retirarPedido(req, res) {

        try {

            const { id } = req.params;

            await pedidosRepository.retirarPedido(id);

            return res.status(200).json({ mendsagem: "Pedido retirado" });

        } catch (error) {

            console.error(error);

            res.status(500).json({ erro: "Erro ao retirar o pedido" });
        }
    }
}