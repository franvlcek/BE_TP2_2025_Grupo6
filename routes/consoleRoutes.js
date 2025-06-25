import express from "express";
import ConsoleController from "../controllers/ConsoleController.js";
import { requireAdmin } from "../utils/jwt.js";

const consoleRoutes = express.Router();
const consoleController = new ConsoleController();

consoleRoutes.get("/",consoleController.getAllConsoles.bind(consoleController));

consoleRoutes.get("/:id",consoleController.getConsolebyID.bind(consoleController));

consoleRoutes.post("/",requireAdmin,consoleController.createConsole.bind(consoleController));

consoleRoutes.put("/:id",requireAdmin,consoleController.updateConsole.bind(consoleController));

consoleRoutes.delete("/:id",requireAdmin,consoleController.deleteConsole.bind(consoleController));

export default consoleRoutes;