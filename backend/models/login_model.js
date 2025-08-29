const {mysql_connection } = require('../db/db_connection');
const bcrypt = require('bcrypt');

const login_model = (email, password)=>{
    return new Promise((resolve,reject)=>{
    const search_query = `select name,password from user where email = ?`;
    mysql_connection.query(search_query, [email], (err, user)=>{
        if(err){
            return reject({
                success : false,
                error : err || 'Error in operation'
            })
        }

       if(!user || user.length==0){
        return resolve({
            success : false,
            error : 'User not found'
        })
       }

       const user_data = user[0];
       const hash_password = user[0].password;

       bcrypt.compare(password, hash_password)
       .then((match)=>{
        if(!match){
            return resolve({
                success : false,
                message : 'Password is wrong'
            })
        }

        return resolve({
            success : true,
            message : 'Login Successfull',
            user : user_data
        })
       })
    })
    })
}

module.exports = {login_model};