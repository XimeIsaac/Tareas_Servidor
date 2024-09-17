import {Router} from 'express';
import usersRoutes from './users';
import peluchesRoutes from './peluches';
import rolesRoutes from './roles';

const router = Router();

router.use('/users', usersRoutes);
router.use('/peluches', peluchesRoutes);
router.use('/usuarios', rolesRoutes);

export default router;