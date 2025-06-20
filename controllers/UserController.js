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

    async getUserbyID(req,res){

        const {id} = req.params;

        try {
            const user = await this.userService.getUserbyID(id);
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

    async login(req,res){
        try {

            const {mail, pass} = req.body;
            const token = await this.userService.login({mail, pass});
            res.cookie("token",token,{
                httpOnly: true,
                sameSite: "lax",
                secure: false,
                path: "/",
            });

            res.status(200).send({
                success:true,
                message: token,
            });
            
        } catch (error) {
            res.status(400).send({
                success:false,
                message: error.message,
            });
        }
    }

    async logout(req,res){
        try {
            res.clearCookie("token",{
                httpOnly: true,
                sameSite: "lax",
                secure: false,
                path:"/",
            });
            res.status(200).send({
                success:true,
                message: "User logged out",
            });
        } catch (error) {
            res.status(400).send({
                success:false,
                message: error.message,
            });
        }
    }

    async me(req,res){
        try {
            const token = req.cookies.token;
            if(!token){
                return res.status(401).send({
                success:false,
                message: "Token error: user is not logged in or does not exist",
            });
            }
            const user = await this.userService.me(token);
            console.log(req.cookies);
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

    async updateUser(req,res){
        const {id} = req.params;
        try {
            const {name,mail, pass, RoleId} = req.body;
            const user = await this.userService.updateUser(id,{name,mail, pass, RoleId});
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

    async deleteUser(req,res){
        const {id} = req.params;

        try {
            const user = await this.userService.deleteUser(id);
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
};

export default UserController;