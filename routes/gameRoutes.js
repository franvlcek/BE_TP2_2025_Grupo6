import express from "express";
import GameController from "../controllers/GameController.js";

const gameRoutes = express.Router();
const gameController = new GameController();

gameRoutes.get("/",gameController.getAllGames.bind(gameController));

gameRoutes.get("/:id",gameController.getGamebyID.bind(gameController));

gameRoutes.post("/",gameController.createGame.bind(gameController));

gameRoutes.put("/:id",gameController.updateGame.bind(gameController));

gameRoutes.delete("/:id",gameController.deleteGame.bind(gameController));

export default gameRoutes;