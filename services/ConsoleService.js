import { Console } from "../models/index.js";

class ConsoleService{

    async getAllConsoles(){
        const consoles = await Console.findAll();
        return consoles;
    }

    getConsolebyID(id){
        return `get console by id service: ${id}`;
    }

    async createConsole(data){
        const console = await Console.create(data);
        return console;
    }
}

export default ConsoleService;



