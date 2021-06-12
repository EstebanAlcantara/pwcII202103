import { Router } from 'express';
// importando el controlador
import userController from '@server/controllers/userController';
// creando instancia
const router = new Router();

// GET users
router.get('/', userController.index);

export default router;
