import express from "express";
import router from "./routes/routes.js";
import connection from "./connection/connection.js";
import { SERVER_PORT } from "./config/config.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./utils/errorHandler.js";

const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
app.use(router);

app.use((req, res, next)=>{
    errorHandler(400,req,res,next);
});

await connection.sync({force:false});

app.listen(SERVER_PORT,()=>{
    console.log(`Listening on port: ${SERVER_PORT}`);
});






