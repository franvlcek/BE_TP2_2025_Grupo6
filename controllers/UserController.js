class UserController{

    getAllUsers(req,res){
        res.status(200).send("Get All Users");
    }

    getUserbyID(req,res){
        res.status(200).send("Get Users by ID");
    }

    createUser(req,res){
        res.status(200).send("Create User");
    }

    updateUser(req,res){
        res.status(200).send("Update a User");
    }

    deleteUser(req,res){
        res.status(200).send("Delete a User");
    }



};

export default UserController;