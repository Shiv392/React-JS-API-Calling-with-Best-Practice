const { signup_model } = require("../models/signup_model");

const signup_controller = async(req,res)=>{
const {name, email, password} = req.body;
try{
const {success, message} = await signup_model(name, email, password);

if(success){
    return res.status(201).json({
        success : true,
        message : message
    })
}
else{
    return res.status(401).json({
        success : false,
        error : message
    })
}
}
catch(err){
return res.status(502).json({
error : err
})
}
}

module.exports = {signup_controller};