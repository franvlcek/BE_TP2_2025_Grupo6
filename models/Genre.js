import { DataTypes,Model } from "sequelize";
import connection from "../connection/connection.js";

class Genre extends Model{}

Genre.init({
    genreName:{
        type: DataTypes.STRING,
        allowNull:false,
    }
},{
    sequelize:connection,
    modelName:"Genre"
});

export default Genre;