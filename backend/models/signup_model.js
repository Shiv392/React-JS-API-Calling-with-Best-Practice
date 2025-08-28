const {mysql_connection} = require('../db/db_connection');
const bcrypt = require('bcrypt');

const signup_model = (name, email, password)=>{
return new Promise((resolve, reject)=>{
const search_user_query = `select name from user where email = ?`;
mysql_connection.query(search_user_query,[email], (err, user)=>{
    if(err){
        return reject({
            success : false,
            error : err
        })
    }

    if(user && user.length>0){
        return resolve({
            success : false,
            message : 'Email is already registered'
        })
    }

    bcrypt.hash(password, Number(process.env.BCRYPT_SALT_KEY)).then((hash_password)=>{
    const insert_user_query = `insert into user(name, email, password) values(?, ?, ?)`;
    mysql_connection.query(insert_user_query, [name, email, hash_password], (insert_err)=>{
        if(insert_err){
            return reject({
                success : false,
                error : insert_err
            })
        }

        return resolve({
            success : true,
            message : 'New user has been created'
        })
    })
    })
    .catch((error)=>{
        return reject({
            success: false,
            error : error
        })
    })
})
})
}
module.exports = {signup_model};