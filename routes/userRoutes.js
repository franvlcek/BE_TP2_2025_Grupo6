import express from "express";

const userRoutes = express.Router();

userRoutes.get("/",(req,res)=>{
    res.status(200).send("get all users");
});

userRoutes.get("/:id",(req,res)=>{
    res.status(200).send("get user by ID");
});

userRoutes.post("/",(req,res)=>{
    res.status(200).send("Create user");
});

userRoutes.put("/:id",(req,res)=>{
    res.status(200).send("update a user");
});

userRoutes.delete("/:id",(req,res)=>{
    res.status(200).send("delete a user");
});

export default userRoutes;