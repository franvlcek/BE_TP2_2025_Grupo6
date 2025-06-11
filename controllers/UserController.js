import UserService from "../services/UserService.js";

class UserController{

    userService = new UserService();

    async getAllUsers(req,res){
        const users = await this.userService.getAllUsers();
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

    async createUser(req,res){
        try {

            const {name,mail, pass, RoleId} = req.body;

            const user = await this.userService.createUser({name,mail, pass, RoleId});

            res.status(200).send({
                success:true,
                message: user,
            });
        } catch (error) {
            res.status(400).send({
                success:false,
                message: error.message,
            });
        }
    }

    updateUser(req,res){
        res.status(200).send("Update a User");
    }

    deleteUser(req,res){
        res.status(200).send("Delete a User");
    }



};

export default UserController;