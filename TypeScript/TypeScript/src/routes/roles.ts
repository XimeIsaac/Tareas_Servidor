import { Router } from "express";
import rolesController from "../controllers/roles.controllers";
import { rolesMiddleware } from "../middlewares/roles";

const router = Router();

router.get('', rolesMiddleware(['admin', 'gerente', 'cliente']), rolesController.listAll);


export default router;

