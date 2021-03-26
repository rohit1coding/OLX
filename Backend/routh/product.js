const express=require('express');
const router=express.Router();
const mongoose=require('mongoose')
const requireLogin=require('../models/middleware/requireLogin')
require('../models/product')
const Product=mongoose.model("product")
//Sell Product
router.post('/sellproduct',(req,res)=>{
    const {p_name,p_details,p_price,p_location,p_image1,p_image2,p_image3}=req.body;
    if(!p_name || !p_price || !p_image1)
    return res.status(402).json({error:"Please add Product details"})
        const product=new Product({
            p_name,p_details,p_price,p_location,p_image1,p_image2,p_image3
        })
        product.save()
            .then(user=>{res.json({message:"Product Added successfully!"});console.log(product)})    
    .catch(err=>{console.log(err)})   
})

// List of All the Products
router.get('/allproduct',(req,res)=>{
    Product.find()
    .then(products =>{
        res.json({products})
    })
    .catch(err =>{console.log(err)})
})

module.exports=router;