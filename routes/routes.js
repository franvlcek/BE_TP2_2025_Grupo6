import { Router } from "express";
import userRoutes from "./userRoutes.js";
import roleRoutes from "./roleRoutes.js";
import consoleRoutes from "./consoleRoutes.js";
import genreRoutes from "./genreRoutes.js"

const router = Router();

router.use("/user",userRoutes);
router.use("/role",roleRoutes);
router.use("/console",consoleRoutes);
router.use("/genre",genreRoutes);

export default router;