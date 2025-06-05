class RoleController{

    getAllRoles(req,res){
        res.status(200).send("Get All Roles");
    }

    getRolebyID(req,res){
        res.status(200).send("Get Role by ID");
    }

    createRole(req,res){
        res.status(200).send("Create a Role");
    }

    updateRole(req,res){
        res.status(200).send("Update a Role");
    }

    deleteRole(req,res){
        res.status(200).send("Delete a Role");
    }
}

export default RoleController;