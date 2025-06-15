import { DataTypes,Model } from "sequelize";
import connection from "../connection/connection.js";

class Game extends Model{}

Game.init({
    gameName:{
        type: DataTypes.STRING,
        allowNull:false,
    }
},{
    sequelize:connection,
    modelName:"Game"
});

export default Game;