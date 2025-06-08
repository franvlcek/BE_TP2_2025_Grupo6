import express from "express";
import router from "./routes/routes.js";
import connection from "./connection/connection.js";
import { SERVER_PORT } from "./config/config.js";

//console.log(process.env);
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(router);

//MiddleWare
// const methodLogger = (req,res,next)=>{
//     console.log(req.method);
//     next();
// }

// app.use(methodLogger);

app.listen(SERVER_PORT,()=>{
    console.log(`Listening on port: ${SERVER_PORT}`);
});






