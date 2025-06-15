import express from "express";
import GenreController from "../controllers/GenreController.js";

const genreRoutes = express.Router();
const genreController = new GenreController();

genreRoutes.get("/",genreController.getAllGenres.bind(genreController));

genreRoutes.get("/:id",genreController.getGenrebyID.bind(genreController));

genreRoutes.post("/",genreController.createGenre.bind(genreController));

genreRoutes.put("/:id",genreController.updateGenre.bind(genreController));

genreRoutes.delete("/:id",genreController.deleteGenre.bind(genreController));

export default genreRoutes;