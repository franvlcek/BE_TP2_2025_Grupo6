import express from "express";
import GenreController from "../controllers/GenreController.js";
import { requireAdmin } from "../utils/jwt.js";

const genreRoutes = express.Router();
const genreController = new GenreController();

genreRoutes.get("/",genreController.getAllGenres.bind(genreController));

genreRoutes.get("/:id",genreController.getGenrebyID.bind(genreController));

genreRoutes.post("/",requireAdmin,genreController.createGenre.bind(genreController));

genreRoutes.put("/:id",requireAdmin,genreController.updateGenre.bind(genreController));

genreRoutes.delete("/:id",requireAdmin,genreController.deleteGenre.bind(genreController));

export default genreRoutes;