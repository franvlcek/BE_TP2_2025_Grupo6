import Role from "./Role.js";
import User from "./User.js";
import Console from "./Console.js";
import Genre from "./Genre.js";
import Game from "./Game.js"
import Comment from "./Comment.js";

Role.hasMany(User);
User.belongsTo(Role);

Console.hasMany(Game);
Game.belongsTo(Console);
Genre.hasMany(Game);
Game.belongsTo(Genre);

User.hasMany(Comment);
Comment.belongsTo(User);
Game.hasMany(Comment);
Comment.belongsTo(Game);


export {User, Role, Console, Genre, Game, Comment};