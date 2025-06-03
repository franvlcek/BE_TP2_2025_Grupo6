import express from "express";
import router from "./routes/routes.js";

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

app.listen(8080,()=>{
    console.log("Listening on port 8080");
});






