const express = require ('express');
const dotenv = require('dotenv');
const user = require('./router/userRouter')
const bodyParser = require('body-parser')


 
//Initiallizing the app
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/',user);

//Configuration
dotenv.config();

//Middleware
const dbConnect = require('./middleware/dbconnect')



//Initializing server

dbConnect(process.env.DB_URL)
app.listen(process.env.PORT,(error) => {
    if(error){
        console.log("error",error)
    }else{
        console.log('server is runing on : ' + process.env.PORT )
    }
})  