import ConsoleService from "../services/ConsoleService.js";

class ConsoleController{

    consoleService = new ConsoleService();

    async getAllConsoles(req,res){
        const consoles = await this.consoleService.getAllConsoles();
        res.status(200).send({
            success:true,
            message: consoles,
        });
    }

    getConsolebyID(req,res){

        const {id} = req.params;
        const console = this.consoleService.getConsolebyID(id);
        
        res.status(200).send({
            success:true,
            message: console,
        });
    }

    async createConsole(req,res){
        try {

            const {name} = req.body;

            const console = await this.consoleService.createConsole({name});

            res.status(200).send({
                success:true,
                message: console,
            });
        } catch (error) {
            res.status(400).send({
                success:false,
                message: error.message,
            });
        }
    }


}

export default ConsoleController;