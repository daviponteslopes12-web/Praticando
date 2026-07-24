import produtoController from '../controllers/produtoController.js';
import { Router } from 'express';
import autenticacaoMiddleware from '../middlewares/autenticacaoMiddleware.js';
import validateSchema from '../middlewares/validateSchema.js';
import { cadastrarProdutoSchema, editarProdutoSchema } from '../schemas/produtoSchema.js';

const router = Router();

router.post('/cadastrar', autenticacaoMiddleware, validateSchema(cadastrarProdutoSchema), produtoController.cadastrarProduto);
router.patch('/editar/:id', autenticacaoMiddleware, validateSchema(editarProdutoSchema), produtoController.editarProduto);
router.delete('/deletar/:id', autenticacaoMiddleware, produtoController.deletarProduto);
router.get('/buscar', autenticacaoMiddleware, produtoController.buscarProdutos);
router.get('/buscarAtivos', produtoController.buscarProdutosAtivos);
router.patch('/alternar/:id', autenticacaoMiddleware, produtoController.alternarAtivo);

export default router;