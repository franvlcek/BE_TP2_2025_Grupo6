export function errorHandler(err,req,res,next){
    
    const status = err.status || 400;
    res.status(status).send({
        success: false,
        message: err.message || "Unknown error ocurred",
    });
}