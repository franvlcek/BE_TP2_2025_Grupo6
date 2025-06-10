import User from "../models/User.js";

class UserService{

    async getAllUsers(){
        const users = await User.findAll();
        return users;
    }

    getUserbyID(id){
        return `get user by id service: ${id}`;
    }

    async createUser(data){
        const user = await User.create(data);
        return user;
    }


}

export default UserService;