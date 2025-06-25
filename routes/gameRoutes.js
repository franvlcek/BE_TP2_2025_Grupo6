import express from "express";
import GameController from "../controllers/GameController.js";
import { requireAdmin } from "../utils/jwt.js";

const gameRoutes = express.Router();
const gameController = new GameController();

gameRoutes.get("/",gameController.getAllGames.bind(gameController));

gameRoutes.get("/:id",gameController.getGamebyID.bind(gameController));

gameRoutes.post("/",requireAdmin,gameController.createGame.bind(gameController));

gameRoutes.put("/:id",requireAdmin,gameController.updateGame.bind(gameController));

gameRoutes.delete("/:id",requireAdmin,gameController.deleteGame.bind(gameController));

export default gameRoutes;