import { Game, Console, Genre } from "../models/index.js";

class GameService{

    async getAllGames(){
        const games = await Game.findAll({
            include:[{
                model:Console,
                attributes:['name']
            },
            {
                model: Genre,
                attributes:['genreName']
            }]
        });
        return games;
    }

    async getGamebyID(id){
        const game = await Game.findOne({
            where:{id:id},
            include:[{
                model:Console,
                attributes:['name']
            },
            {
                model: Genre,
                attributes:['genreName']
            }]
        });
        return game;
    }

    async createGame(data){
        const game = await Game.create(data);
        return game;
    }

    async updateGame(id,data){
        const game =await Game.update(data,{
            where:{id:id}
        });
        return game;
    }

    async deleteGame(id){
        const deleted = await Game.destroy({
            where:{id:id}
        });
        return deleted;
    }
}

export default GameService;