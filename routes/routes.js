import { Router } from "express";
import userRoutes from "./userRoutes.js";
import roleRoutes from "./roleRoutes.js";

const router = Router();

router.use("/user",userRoutes);
router.use("/role",roleRoutes);

export default router;