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

    getRolebyID(req,res){
        const {id} = req.params;
        const role = this.roleService.getRolebyID(id);
        
        res.status(200).send({
            success:true,
            message: role,
        });
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

    updateRole(req,res){
        res.status(200).send("Update a Role");
    }

    deleteRole(req,res){
        res.status(200).send("Delete a Role");
    }
}

export default RoleController;