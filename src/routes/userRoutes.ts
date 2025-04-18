import { Router } from "express";
import { login, register } from "../controllers/userController";

const router = Router();

router.post("/", login);
router.post("/registrar", register);

export default router;
