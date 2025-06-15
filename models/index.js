import Role from "./Role.js";
import User from "./User.js";
import Console from "./Console.js";
import Genre from "./Genre.js";
import Game from "./Game.js"

Role.hasMany(User);
User.belongsTo(Role);








export {User, Role, Console, Genre, Game};