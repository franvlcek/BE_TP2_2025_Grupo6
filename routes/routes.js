import { Router } from "express";
import userRoutes from "./userRoutes.js";
import roleRoutes from "./roleRoutes.js";
import consoleRoutes from "./consoleRoutes.js";

const router = Router();

router.use("/user",userRoutes);
router.use("/role",roleRoutes);
router.use("/console",consoleRoutes);

export default router;