const adminMiddleware = async(req, res, next) =>{
    try {
        console.log(req.user);
        const adminRole = req.user.isAdmin;
        if(!adminRole){
            return res.status(401).json({message: "You are not authorized to access this resource"
        })
    }
        next();
    } catch (error) {
        next(error)
    }
};

module.exports = adminMiddleware;