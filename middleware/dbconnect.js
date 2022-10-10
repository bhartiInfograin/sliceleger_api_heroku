const mongoose = require('mongoose')

//Here we are connecting to the database.

module.exports = function connect(dbURL){

    if(mongoose.connection){
        mongoose.connection.close();
    }

    mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true},(err) => {

        if(err){
            console.log(err)
        }else{
            console.log("Database connected successfully");
        }
    })

}










