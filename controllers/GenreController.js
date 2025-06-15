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
            res.status(200).send({
                success:true,
                message: genre,
            });
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

            const genre = await this.genreService.createGenre({genreName});

            res.status(200).send({
                success:true,
                message: genre,
            });
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
            res.status(200).send({
                success:true,
                message: genre,
            });
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
            res.status(200).send({
                success:true,
                message: genre,
            });
        } catch (error) {
            res.status(400).send({
                success:false,
                message: error.message,
            });
        }
    }

}

export default GenreController;