import express from "express";
import UserController from "../controllers/UserController.js";
import { requireAdmin } from "../utils/jwt.js";

const userRoutes = express.Router();
const userController = new UserController();

userRoutes.get("/",userController.getAllUsers.bind(userController));

userRoutes.get("/me",userController.me.bind(userController));
userRoutes.get("/:id",userController.getUserbyID.bind(userController));

userRoutes.post("/",userController.createUser.bind(userController));
userRoutes.post("/login",userController.login.bind(userController));
userRoutes.post("/logout",userController.logout.bind(userController));

userRoutes.put("/:id",userController.updateUser.bind(userController));

userRoutes.delete("/:id",userController.deleteUser.bind(userController));

export default userRoutes;