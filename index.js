import express from "express";

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send("get all");
});

app.get("/:id",(req,res)=>{
    res.status(200).send("get ID");
});

app.post("/",(req,res)=>{
    console.log(req);
    res.status(200).send("post");
});

app.listen(8080,()=>{
    console.log("Listening on port 8080");
});






