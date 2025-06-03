import express from "express";

const roleRoutes = express.Router();

roleRoutes.get("/",(req,res)=>{
    res.status(200).send("get all roles");
});

roleRoutes.get("/:id",(req,res)=>{
    res.status(200).send("get role by ID");
});

roleRoutes.post("/",(req,res)=>{
    res.status(200).send("Create role");
});

roleRoutes.put("/:id",(req,res)=>{
    res.status(200).send("update a role");
});

roleRoutes.delete("/:id",(req,res)=>{
    res.status(200).send("delete a role");
});

export default roleRoutes;