import jwt from "jsonwebtoken"
const authMiddleware=(req,res,next)=>{
    try {
       const token=req.headers.authorization 
       if(!token){
        return res.status(401).json({message:"No token provider"})
       }
       const decoded=jwt.verify(token,process.env.SECRET_KEY)
       req.user=decoded
    } catch (err) {
        next(err)
    }
}
export default authMiddleware