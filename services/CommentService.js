import { Comment, User, Game } from "../models/index.js";

class CommentService{

    async getAllComments(){
        const comment = await Comment.findAll({
            include:[{
                model:User,
                attributes:["id",'name',"RoleId"]
            },
            {
                model: Game,
                attributes:['gameName']
            }]
        });
        return comment;
    }

    async getCommentbyID(id){
        const comment = await Comment.findOne({
            where:{id:id},
            include:[{
                model:User,
                attributes:["id",'name',"RoleId"]
            },
            {
                model: Game,
                attributes:['gameName']
            }]
        });
        return comment;
    }

    async createComment(data){
        const comment = await Comment.create(data);
        return comment;
    }

    async updateComment(id,data){
        const comment =await Comment.update(data,{
            where:{id:id}
        });
        return comment;
    }

    async deleteComment(id){
        const deleted = await Comment.destroy({
            where:{id:id}
        });
        return deleted;
    }
}

export default CommentService;