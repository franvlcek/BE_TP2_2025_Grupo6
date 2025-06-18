import { User, Comment, Game } from "../models/index.js";

class UserService{

    async getAllUsers(){
        const users = await User.findAll();
        return users;
    }

    async getUserbyID(id){
        const user = await User.findOne({
            where:{id:id},
            include:[
            {
                model: Comment,
                attributes:["id",'content',"GameId"],
                include:[{
                    model:Game,
                    attributes:["id","gamename"]
                }]
            }]
        });
        return user;
    }

    async createUser(data){
        const user = await User.create(data);
        return user;
    }

    async updateUser(id,data){
        const user =await User.update(data,{
            where:{id:id}
        });
        return user;
    }

    async deleteUser(id){
        const deleted = await User.destroy({
            where:{id:id}
        });
        return deleted;
    }
}

export default UserService;