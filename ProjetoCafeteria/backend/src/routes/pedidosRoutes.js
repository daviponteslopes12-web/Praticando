import { Router } from 'express';
import { pedidosController } from '../controllers/pedidosController.js'

const router = Router();

router.get('/pedidos', pedidosController.listarPedidos);
router.post('/pedidos', pedidosController.cadastrarPedido);
router.put('/pedidos/:id/preparando', pedidosController.marcarPedidoPreparando);
router.put('/pedidos/:id/pronto', pedidosController.marcarPedidoPronto);
router.put('/pedidos/:id/cancelar', pedidosController.cancelarPedido);
router.put('/pedidos/:id/retirar', pedidosController.retirarPedido);

export default router;