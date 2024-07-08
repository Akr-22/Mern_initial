const jwt = require("jsonwebtoken");
const User = require("../models/user-model");


const authMiddleware = async(req , res, next) =>{
    const token = req.header("Authorization");
    

    if(!token){
        return res.status(401).json({message :"unauthorized http,token not provided"});
        
    };
    
    const jwtToken = token.replace("Bearer", "").trim();
    console.log("token from the auth middleware",jwtToken);

    try {
        //verifying the token
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        console.log(isVerified);   
        //geeting the complete details and maintaining the password not to be sent 
        const userData = await User.findOne({email:isVerified.email }).select({ password:0 });
        // console.log(userData);

        req.user = userData;
        req.token=token;
        req.userID = userData._id;

        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({message : "unauthorized invalid token"})
        
    } 
};


module.exports = authMiddleware;