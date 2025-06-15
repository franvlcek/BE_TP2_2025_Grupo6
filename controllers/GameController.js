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
            res.status(200).send({
                success:true,
                message: game,
            });
        } catch (error) {
            res.status(400).send({
                success:false,
                message: error.message,
            });
        }
    }

    async createGame(req,res){
        try {

            const {gameName} = req.body;

            const game = await this.gameService.createGame({gameName});

            res.status(200).send({
                success:true,
                message: game,
            });
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
            const {gameName} = req.body;
            const game = await this.gameService.updateGame(id,{gameName});
            res.status(200).send({
                success:true,
                message: game,
            });
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
            res.status(200).send({
                success:true,
                message: game,
            });
        } catch (error) {
            res.status(400).send({
                success:false,
                message: error.message,
            });
        }
    }

}

export default GameController;