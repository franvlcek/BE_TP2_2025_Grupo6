import GameService from "../services/GameService.js";

class GameController{

    gameService = new GameService();

    async getAllGames(req,res){
        const games = await this.gameService.getAllGames();
        res.status(200).send({
            success:true,
            message: games,
        });
    }

    async getGamebyID(req,res){
        const {id} = req.params;
        try {
            const game = await this.gameService.getGamebyID(id);
            if(game == null || game == ""){
                res.status(400).send({
                success:false,
                message: `Game with id ${id} not found`,
                });
            }else{
                res.status(200).send({
                success:true,
                message: game,
                });
            }
        } catch (error) {
            res.status(400).send({
                success:false,
                message: error.message,
            });
        }
    }

    async createGame(req,res){
        try {

            const {gameName, ConsoleId, GenreId} = req.body;
            if(!gameName || !ConsoleId || !GenreId){
                res.status(400).send({
                success:false,
                message: "Game name, console, and genre are required",
                });
            }else{
                const game = await this.gameService.createGame({gameName, ConsoleId, GenreId});

                res.status(200).send({
                    success:true,
                    message: game,
                });
            }
        } catch (error) {
            res.status(400).send({
                success:false,
                message: error.message,
            });
        }
    }

    async updateGame(req,res){
        const {id} = req.params;
        try {
            const {gameName, ConsoleId, GenreId} = req.body;
            const game = await this.gameService.updateGame(id,{gameName, ConsoleId, GenreId});
            if(game == 1){
                res.status(200).send({
                success:true,
                message: "Game was updated successfully",
                });
            }else{
                res.status(400).send({
                success:false,
                message: `Game with id ${id} not found`,
                });
            }
        } catch (error) {
            res.status(400).send({
                success:false,
                message: error.message,
            });
        }
    }

    async deleteGame(req,res){
        const {id} = req.params;

        try {
            const game = await this.gameService.deleteGame(id);
            if(game == 1){
                res.status(200).send({
                success:true,
                message: "Game was deleted successfully",
                });
            }else{
                res.status(400).send({
                success:false,
                message: `Game with id ${id} not found`,
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

export default GameController;