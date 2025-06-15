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
            res.status(200).send({
                success:true,
                message: comment,
            });
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

            const comment = await this.commentService.createComment({content, UserId, GameId});

            res.status(200).send({
                success:true,
                message: comment,
            });
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
            res.status(200).send({
                success:true,
                message: comment,
            });
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
            res.status(200).send({
                success:true,
                message: comment,
            });
        } catch (error) {
            res.status(400).send({
                success:false,
                message: error.message,
            });
        }
    }

}

export default CommentController;