const mongoose=require('mongoose')
const UserSchema=new mongoose.Schema({
    p_name:{type:String,require:true},
    p_details:{type:String,require:true},
    p_price:{type:Number},
    p_image1:{type:String,required:true},
    p_image2:{type:String},
    p_image3:{type:String},
    p_location:{type:String,require:true}
});
mongoose.model('product',UserSchema)