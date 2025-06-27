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

    async getConsolebyID(req,res){

        const {id} = req.params;
        try {
            const console = await this.consoleService.getConsolebyID(id);
            if(console == null || console == ""){
                res.status(400).send({
                success:false,
                message: `Console with id ${id} not found`,
                });
            }else{
                res.status(200).send({
                success:true,
                message: console,
                });
            }
        } catch (error) {
            res.status(400).send({
                success:false,
                message: error.message,
            });
        }
    }

    async createConsole(req,res){
        try {

            const {name} = req.body;
            if(!name){
                res.status(400).send({
                success:false,
                message: "Console name is required",
                });
            }else{
                const console = await this.consoleService.createConsole({name});

                res.status(200).send({
                    success:true,
                    message: console,
                });
            }
        } catch (error) {
            res.status(400).send({
                success:false,
                message: error.message,
            });
        }
    }

    async updateConsole(req,res){
        const {id} = req.params;
        try {
            const {name} = req.body;
            const console = await this.consoleService.updateConsole(id,{name});
            if(console == 1){
                res.status(200).send({
                success:true,
                message: "Console was updated successfully",
                });
            }else{
                res.status(400).send({
                success:false,
                message: `Console with id ${id} not found`,
                });
            }
        } catch (error) {
            res.status(400).send({
                success:false,
                message: error.message,
            });
        }
    }

    async deleteConsole(req,res){
        const {id} = req.params;

        try {
            const console = await this.consoleService.deleteConsole(id);
            if(console == 1){
                res.status(200).send({
                success:true,
                message: "Console was deleted successfully",
                });
            }else{
                res.status(400).send({
                success:false,
                message: `Console with id ${id} not found`,
                });
            }
        } catch (error) {
            res.status(400).send({
                success:false,
                message: error.message,
            });
        }
    }
}

export default ConsoleController;