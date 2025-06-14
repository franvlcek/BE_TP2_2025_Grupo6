import Role from "./Role.js";
import User from "./User.js";
import Console from "./Console.js";

Role.hasMany(User);
User.belongsTo(Role);








export {User,Role,Console};