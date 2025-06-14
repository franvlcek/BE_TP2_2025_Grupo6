import express from "express";
import RoleController from "../controllers/RoleController.js";

const roleRoutes = express.Router();
const roleController = new RoleController();

roleRoutes.get("/",roleController.getAllRoles.bind(roleController));

roleRoutes.get("/:id",roleController.getRolebyID.bind(roleController));

roleRoutes.post("/",roleController.createRole.bind(roleController));

roleRoutes.put("/:id",roleController.updateRole.bind(roleController));

roleRoutes.delete("/:id",roleController.deleteRole.bind(roleController));

export default roleRoutes;