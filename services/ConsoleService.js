import { Console, Game } from "../models/index.js";

class ConsoleService{

    async getAllConsoles(){
        const consoles = await Console.findAll();
        return consoles;
    }

    async getConsolebyID(id){
        const console = await Console.findOne({
            where:{id:id},
            include: {
                model: Game,
                attributes: ['gameName']
            }
        });
        return console;
    }

    async createConsole(data){
        const console = await Console.create(data);
        return console;
    }

    async updateConsole(id, data){
        const console =await Console.update(data,{
            where:{id:id}
        });
        return console;
    }

    async deleteConsole(id){
        const deleted = await Console.destroy({
            where:{id:id}
        });
        return deleted;
    }
}

export default ConsoleService;