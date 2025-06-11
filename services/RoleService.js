import { Role } from "../models/index.js";

class RoleService{

    async getAllRoles(){
        const roles = await Role.findAll();
        return roles;
    }

    getRolebyID(id){
        return `get role by id service: ${id}`;
    }

    async createRole(data){
        const role = await Role.create(data);
        return role;
    }
}

export default RoleService;