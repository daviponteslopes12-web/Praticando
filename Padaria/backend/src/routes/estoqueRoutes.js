import { Router } from 'express';
import { estoqueController } from '../controllers/estoqueController.js';
import { validarSchema } from '../middlewares/validateMiddleware.js';
import { schemaCadastro, schemaAdicionar, schemaRetirar } from '../schemas/estoqueSchema.js';

const router = Router();

router.post('/', validarSchema(schemaCadastro), estoqueController.cadastrar);
router.get('/', estoqueController.listar);
router.patch('/adicionar', validarSchema(schemaAdicionar), estoqueController.adicionarEstoque);
router.patch('/retirar', validarSchema(schemaRetirar), estoqueController.retirarEstoque);

export default router;