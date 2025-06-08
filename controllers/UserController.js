import UserService from "../services/UserService.js";

class UserController{

    userService = new UserService();

    getAllUsers(req,res){
        const users = this.userService.getAllUsers();
        res.status(200).send({
            success:true,
            message: users,
        });
    }

    getUserbyID(req,res){

        const {id} = req.params;
        const user = this.userService.getUserbyID(id);
        
        res.status(200).send({
            success:true,
            message: user,
        });
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