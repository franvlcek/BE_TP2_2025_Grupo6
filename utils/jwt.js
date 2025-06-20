import jwt from "jsonwebtoken";
import { SECRET } from "../config/config.js";

export const generateToken = (data) =>{
    const token = jwt.sign(data, SECRET, {expiresIn:"1h"});
    return token;
}

export const verifyToken = (token) =>{
    const decoded = jwt.verify(token,SECRET);
    return decoded;
}

export const requireAdmin=(req,res,next)=>{
    const token = req.cookies.token;
    if(!token){
        return res.status(400).send({
                success:false,
                message: "Unauthorized",
            });
    }

    try {
        const decoded = verifyToken(token);
        if(decoded.message.role !== 1){
            return res.status(400).send({
                success:false,
                message: "Admin access only",
            });
        }
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(400).send({
                success:false,
                message: error.message,
            });
    }
}


