const jwt = require("jsonwebtoken");

const middlerwrare = {
    verifyToken: (req,res,next) =>{
        const token = req.headers.token;
        if(token){
            const tokenAccsess = token.split(" ")[1];
            jwt.verify(tokenAccsess,process.env.KEY_ACCSESS,(err,user)=>{
                if(err){
                    res.status(403).json("Token in not valid");
                }
                req.user = user;
                next();
            })
        }else{
            res.status(401).json("Youre not authenticated ");
        }
    },

    verifyTokenUseAndAdmin: (req,res,next)=>{
        middlerwrare.verifyToken(req,res,()=>{
            if(req.user.id == req.params.id || req.user.admin){
                next();
            }else{
                res.status(403).json("Youre not allowed to delete other");
            }
        });
    }

}

module.exports = middlerwrare;