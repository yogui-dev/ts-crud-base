import { Router } from "express";
import UserController from "../controllers/user.controller";

const router = Router();

router.get("/", UserController.get);
router.get("/:id", UserController.find);
router.post("/", UserController.create);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.delete);

export default router;
