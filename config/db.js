require("dotenv").config();
const mongoose = require("mongoose");


function connectDB(){
    mongoose.connect(process.env.MONGO_CONNECTION_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    
    }).then(() => {
        
        console.log("connection successful");
    }).catch((e) => {

        console.log(`No connnection ${e} `);
        
    })
}


module.exports = connectDB;
