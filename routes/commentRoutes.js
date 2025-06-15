import express from "express";
import CommentController from "../controllers/CommentController.js";

const commentRoutes = express.Router();
const commentController = new CommentController();

commentRoutes.get("/",commentController.getAllComments.bind(commentController));

commentRoutes.get("/:id",commentController.getCommentbyID.bind(commentController));

commentRoutes.post("/",commentController.createComment.bind(commentController));

commentRoutes.put("/:id",commentController.updateComment.bind(commentController));

commentRoutes.delete("/:id",commentController.deleteComment.bind(commentController));

export default commentRoutes;