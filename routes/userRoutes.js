import express from "express";
import UserController from "../controllers/userController.js";

const userRoutes = express.Router();
const userController = new UserController();

userRoutes.get("/",userController.getAllUsers);

userRoutes.get("/:id",userController.getUserbyID);

userRoutes.post("/",userController.createUser);

userRoutes.put("/:id",userController.updateUser);

userRoutes.delete("/:id",userController.deleteUser);

export default userRoutes;