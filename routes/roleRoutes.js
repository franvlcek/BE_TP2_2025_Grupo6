import express from "express";
import RoleController from "../controllers/RoleController.js";

const roleRoutes = express.Router();
const roleController = new RoleController();

roleRoutes.get("/",roleController.getAllRoles);

roleRoutes.get("/:id",roleController.getRolebyID);

roleRoutes.post("/",roleController.createRole);

roleRoutes.put("/:id",roleController.updateRole);

roleRoutes.delete("/:id",roleController.deleteRole);

export default roleRoutes;