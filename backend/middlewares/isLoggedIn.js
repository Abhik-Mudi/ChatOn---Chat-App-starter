import jwt from "jsonwebtoken"
import User from "../models/userModel.js";

// This middleware checks if the user is logged in by verifying the JWT token
// If the token is valid, it retrieves the user from the database and attaches it to the request object
const isLoggedIn=async (req, res, next)=>{
    try {
        const token=req.cookies.jwt;
        if(!token){
            return res.status(401).json({error: "Unauthorized - No token provided"})
        }
        const decoded=jwt.verify(token, process.env.JWT_SECRET)

        if(!decoded) return res.status(401).json({error: "Unauthorized - Invalid token"});

        const user=await User.findById(decoded.userId)
        if(!user) return res.status(404).json({error: "user not found"})
            
        req.user=user;

        next();
        
    } catch (error) {
        console.log(error.message)
       res.status(500).json({error: "Internal server error"}) 
    }
}

export default isLoggedIn;