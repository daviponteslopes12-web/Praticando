import { Router } from 'express';
import { fornadaController } from '../controllers/fornadaController.js';
import { validarSchema } from '../middlewares/validateMiddleware.js';
import { schemaCadastro } from '../schemas/fornadaSchema.js';

const router = Router();

router.post('/', validarSchema(schemaCadastro), fornadaController.cadastrar);
router.get('/', fornadaController.listar);
router.get('/status/:status', fornadaController.buscarStatus);

export default router;