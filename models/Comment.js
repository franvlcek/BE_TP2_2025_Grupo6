import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Comment extends Model{}

Comment.init({
    content:{
        type:DataTypes.STRING(100),
        allowNull:false
    }
},{
    sequelize:connection,
    modelName:"Comment"
});

export default Comment;