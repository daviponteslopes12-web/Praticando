import { Router } from 'express';
import comboController from '../controllers/comboController.js';
import autenticacaoMiddleware from '../middlewares/autenticacaoMiddleware.js';
import validarSchema from '../middlewares/schemaMiddleware.js';
import { cadastrarComboSchema, editarComboSchema } from '../schemas/comboSchema.js';

const router = Router();

router.post('/cadastrar', autenticacaoMiddleware, validarSchema(cadastrarComboSchema), comboController.cadastrarCombo);
router.patch('/editar/:id', autenticacaoMiddleware, validarSchema(editarComboSchema), comboController.editarCombo);
router.delete('/deletar/:id', autenticacaoMiddleware, comboController.deletarCombo);
router.get('/listar', autenticacaoMiddleware, comboController.listarCombos);
router.get('/listarAtivos', comboController.listarCombosAtivos);
router.patch('/alternar/:id', autenticacaoMiddleware, comboController.alternarAtivo);

export default router;