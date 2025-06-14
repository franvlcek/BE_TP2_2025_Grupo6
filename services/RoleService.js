import { Role } from "../models/index.js";

class RoleService{

    async getAllRoles(){
        const roles = await Role.findAll();
        return roles;
    }

    async getRolebyID(id){
        const role = await Role.findOne({
            where:{id:id}
        });
        return role;
    }

    async createRole(data){
        const role = await Role.create(data);
        return role;
    }

    async updateRole(id, data){
        const role =await Role.update(data,{
            where:{id:id}
        });
        return role;
    }

    async deleteRole(id){
        const deleted = await Role.destroy({
            where:{id:id}
        });
        return deleted;
    }
}

export default RoleService;