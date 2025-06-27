import CommentService from "../services/CommentService.js";

class CommentController{

    commentService = new CommentService();

    async getAllComments(req,res){
        const comment = await this.commentService.getAllComments();
        res.status(200).send({
            success:true,
            message: comment,
        });
    }

    async getCommentbyID(req,res){
        const {id} = req.params;
        try {
            const comment = await this.commentService.getCommentbyID(id);
            if(comment == null || comment == ""){
                res.status(400).send({
                success:false,
                message: `Comment with id ${id} not found`,
                });
            }else{
                res.status(200).send({
                success:true,
                message: comment,
                });
            }
        } catch (error) {
            res.status(400).send({
                success:false,
                message: error.message,
            });
        }
    }

    async createComment(req,res){
        try {

            const {content, UserId, GameId} = req.body;
            if(!content || !UserId || !GameId){
                res.status(400).send({
                success:false,
                message: "Message, user and game are required",
                });
            }else{
                const comment = await this.commentService.createComment({content, UserId, GameId});

                res.status(200).send({
                    success:true,
                    message: comment,
                });
            }
        } catch (error) {
            res.status(400).send({
                success:false,
                message: error.message,
            });
        }
    }

    async updateComment(req,res){
        const {id} = req.params;
        try {
            const {content, UserId, GameId} = req.body;
            const comment = await this.commentService.updateComment(id,{content, UserId, GameId});
            if (comment == 1){
                res.status(200).send({
                success:true,
                message: "Comment was updated successfully",
                });
            }else{
                res.status(400).send({
                success:false,
                message: `Comment with id ${id} not found`,
                });
            }
        } catch (error) {
            res.status(400).send({
                success:false,
                message: error.message,
            });
        }
    }

    async deleteComment(req,res){
        const {id} = req.params;

        try {
            const comment = await this.commentService.deleteComment(id);
            if(comment == 1){
                res.status(200).send({
                success:true,
                message: "Comment was deleted successfully",
                });
            }else{
                res.status(400).send({
                success:false,
                message: `Comment with id ${id} not found`,
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

export default CommentController;