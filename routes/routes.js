import { Router } from "express";
import userRoutes from "./userRoutes.js";
import roleRoutes from "./roleRoutes.js";
import consoleRoutes from "./consoleRoutes.js";
import genreRoutes from "./genreRoutes.js"
import gameRoutes from "./gameRoutes.js";
import commentRoutes from "./commentRoutes.js";

const router = Router();

router.use("/user",userRoutes);
router.use("/role",roleRoutes);
router.use("/console",consoleRoutes);
router.use("/genre",genreRoutes);
router.use("/game",gameRoutes);
router.use("/comment",commentRoutes);

export default router;