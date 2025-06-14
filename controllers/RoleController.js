import RoleService from "../services/RoleService.js";

class RoleController{

    roleService = new RoleService();

    async getAllRoles(req,res){

        const roles = await this.roleService.getAllRoles();
        res.status(200).send({
            success:true,
            message: roles,
        });
    }

    async getRolebyID(req,res){
        const {id} = req.params;
        try {
            const role = await this.roleService.getRolebyID(id);
            res.status(200).send({
                success:true,
                message: role,
            });
        } catch (error) {
            res.status(400).send({
                success:false,
                message: error.message,
            });
        }
    }

    async createRole(req,res){
        try {

            const {roleName} = req.body;

            const role = await this.roleService.createRole({roleName});

            res.status(200).send({
                success:true,
                message: role,
            });
        } catch (error) {
            res.status(400).send({
                success:false,
                message: error.message,
            });
        }
    }

    async updateRole(req,res){
        const {id} = req.params;
        try {
            const {roleName} = req.body;
            const role = await this.roleService.updateRole(id,{roleName});
            res.status(200).send({
                success:true,
                message: role,
            });
        } catch (error) {
            res.status(400).send({
                success:false,
                message: error.message,
            });
        }
    }

    async deleteRole(req,res){
        const {id} = req.params;

        try {
            const role = await this.roleService.deleteRole(id);
            res.status(200).send({
                success:true,
                message: role,
            });
        } catch (error) {
            res.status(400).send({
                success:false,
                message: error.message,
            });
        }
    }
}

export default RoleController;