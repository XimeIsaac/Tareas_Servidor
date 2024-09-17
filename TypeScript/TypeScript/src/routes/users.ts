import { Router } from "express";
import { authMiddleware } from "../middlewares/auth";
import UsersController from "../controllers/user.controllers";

const router = Router();

router.get('', authMiddleware, UsersController.findAll);

export default router;