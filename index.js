import express from "express";
import router from "./routes/routes.js";
import connection from "./connection/connection.js";
import { SERVER_PORT } from "./config/config.js";
import cors from "cors";
import cookieParser from "cookie-parser";

//console.log(process.env);
const app = express();
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(router);


//Para tirar las tablas y volverlas a hacer
//await connection.sync({force:true});
await connection.sync({force:false});

app.listen(SERVER_PORT,()=>{
    console.log(`Listening on port: ${SERVER_PORT}`);
});






