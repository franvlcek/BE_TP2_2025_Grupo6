import GenreService from "../services/GenreService.js";

class GenreController{

    genreService = new GenreService();

    async getAllGenres(req,res){
        const genres = await this.genreService.getAllGenres();
        res.status(200).send({
            success:true,
            message: genres,
        });
    }

    async getGenrebyID(req,res){
        const {id} = req.params;
        try {
            const genre = await this.genreService.getGenrebyID(id);
            if(genre == null || genre == ""){
                res.status(400).send({
                success:false,
                message: `Genre with id ${id} not found`,
                });
            }else{
                res.status(200).send({
                    success:true,
                    message: genre,
                });
            }
        } catch (error) {
            res.status(400).send({
                success:false,
                message: error.message,
            });
        }
    }

    async createGenre(req,res){
        try {

            const {genreName} = req.body;
            if(!genreName){
                res.status(400).send({
                success:false,
                message: "Genre name is required",
                });
            }else{
                const genre = await this.genreService.createGenre({genreName});

                res.status(200).send({
                    success:true,
                    message: genre,
                });
            }
        } catch (error) {
            res.status(400).send({
                success:false,
                message: error.message,
            });
        }
    }

    async updateGenre(req,res){
        const {id} = req.params;
        try {
            const {genreName} = req.body;
            const genre = await this.genreService.updateGenre(id,{genreName});
            if(genre == 1){
                res.status(200).send({
                success:true,
                message: "Genre was updated successfully",
                });
            }else{
                res.status(400).send({
                success:false,
                message: `Genre with id ${id} not found`,
                });
            }
        } catch (error) {
            res.status(400).send({
                success:false,
                message: error.message,
            });
        }
    }

    async deleteGenre(req,res){
        const {id} = req.params;

        try {
            const genre = await this.genreService.deleteGenre(id);
            if(genre == 1){
                res.status(200).send({
                success:true,
                message: "Genre was deleted successfully",
                });
            }else{
                res.status(400).send({
                success:false,
                message: `Genre with id ${id} not found`,
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

export default GenreController;