const express = require('express');
const body_parser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const port  = 8080;
const app = express();
const {mysql_connection} = require('./db/db_connection');

app.use(body_parser.json());
app.use(cors());

const login_routes = require('./routes/login_route');
const signup_routes = require('./routes/signup_route');

mysql_connection.connect((err)=>{
    if(err){
        console.log('error while db connection------>', err);
    }
    else console.log('database connection successfull');
});

app.use(login_routes);
app.use(signup_routes);

app.get('/',(req,res)=>{
    return res.send(`<h1>Home Route</h1>`);
})

app.listen(port, ()=>{
    console.log(`server started http://localhost:${port}`)
})