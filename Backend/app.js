var express= require('express');
var app=express();
var mongoose= require('mongoose');
const {MongoURI}=require('./cofig/keys');

// Mongoose Schemas
require('./models/user')
require('./models/product')

mongoose.connect(MongoURI,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{console.log("connected to Mongodb")})
    .catch((err)=>{console.log("Error:connecting Mongodb:",err)})
  
app.use(express.json())
app.use(require('./routh/auth'))
app.use(require('./routh/product'))

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'))
    const path = require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })  
}


const PORT= process.env.PORT || 5000;
app.listen(PORT,()=>{console.log(`App is running on Port:${PORT}`)});

