// import router
import { Router } from 'express';
// importando al controlador home
import homeController from '@server/controllers/homeControllers';
// Crenado instancia del router
const router = new Router();
// GET
router.get('/', homeController.index);

// agregando nueva ruta
router.get('/itgam', homeController.itgam);
// Exportando el router que maneja las subrutas
// para el controlador home
export default router;
