import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Console extends Model{}

Console.init({
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize:connection,
    modelName:"Console"
});


export default Console;