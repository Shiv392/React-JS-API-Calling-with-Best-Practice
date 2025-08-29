const { login_model } = require("../models/login_model");

const login_controller = async(req,res)=>{
const {email, password} = req.body;
try{
const {success, message, user} = await login_model(email,password);
if(!success){
    return res.status(401).json({
        success : false,
        error : message
    })
}
else{
    return res.status(200).json({
        success : true,
        message : message,
        user : user
    })
}
}
catch(err){
    return res.status(502).json({
        success : false,
        message : 'Server Error',
        error : err.message
    })
}
}

module.exports = {login_controller};