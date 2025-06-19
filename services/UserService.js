import { User, Comment, Game } from "../models/index.js";
import { generateToken, verifyToken } from "../utils/jwt.js";

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

    async login(data){
        const {mail, pass} = data;
        const user = await User.findOne({
            where:{mail:mail}
        });

        if(!user){
            throw new Error("User not found");
        }

        const comparePass = await user.compare(pass);
        if(!comparePass){
            throw new Error("User not found");
        }

        const payload = {
            id: user.id,
            name: user.name,
            role: user.RoleId
        };

        const token = generateToken(payload);

        return token;
    }

    async me(token){
        const user = verifyToken(token);
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