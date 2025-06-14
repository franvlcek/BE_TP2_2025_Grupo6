import express from "express";
import ConsoleController from "../controllers/ConsoleController.js";

const consoleRoutes = express.Router();
const consoleController = new ConsoleController();

consoleRoutes.get("/",consoleController.getAllConsoles.bind(consoleController));

consoleRoutes.get("/:id",consoleController.getConsolebyID.bind(consoleController));

consoleRoutes.post("/",consoleController.createConsole.bind(consoleController));

consoleRoutes.put("/:id",consoleController.updateConsole.bind(consoleController));

consoleRoutes.delete("/:id",consoleController.deleteConsole.bind(consoleController));

export default consoleRoutes;