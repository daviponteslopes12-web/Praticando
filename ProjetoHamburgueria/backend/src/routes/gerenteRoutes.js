import { Router } from 'express';
import { gerenteController } from '../controllers/gerenteController.js';
import { loginSchema } from '../schemas/gerenteSchemas.js';
import validarSchema from '../middlewares/validateSchema.js';

const router = Router();

router.post('/buscar', gerenteController.buscarPorEmail);
router.post('/login', validarSchema(loginSchema), gerenteController.login);

export default router;