import express from "express";
import UserController from "../controllers/UserController.js";

const userRoutes = express.Router();
const userController = new UserController();

userRoutes.get("/",userController.getAllUsers.bind(userController));

userRoutes.get("/:id",userController.getUserbyID.bind(userController));

userRoutes.post("/",userController.createUser.bind(userController));

userRoutes.put("/:id",userController.updateUser);

userRoutes.delete("/:id",userController.deleteUser);

export default userRoutes;