import { Genre } from "../models/index.js";

class GenreService{

    async getAllGenres(){
        const genres = await Genre.findAll();
        return genres;
    }

    async getGenrebyID(id){
        const genre = await Genre.findOne({
            where:{id:id}
        });
        return genre;
    }

    async createGenre(data){
        const genre = await Genre.create(data);
        return genre;
    }

    async updateGenre(id,data){
        const genre =await Genre.update(data,{
            where:{id:id}
        });
        return genre;
    }

    async deleteGenre(id){
        const deleted = await Genre.destroy({
            where:{id:id}
        });
        return deleted;
    }
}

export default GenreService;