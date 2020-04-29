const mongoose = require('mongoose');
const Product = require('../model/products');


//get product controller
module.exports.getProduct = async function(req,res){
        let product  = await Product.find({})
        .sort('-createdAt');
    
        return res.json(200,{
            products:product
        });
        console.log("Error while fetching products");
};

//add product controller
module.exports.addProduct = async function(req,res){
    try{
      let product = await Product.create({
        name: req.body.name,
        quantity: req.body.quantity
    });
      return res.json(200,{product}
    )

    }catch(err){
      console.log("Error adding product",err);
      return res.json(500,{
          message:"Internal server error"
      });
    }
};

//updateProduct Controller
module.exports.updateProduct = function(req,res){
    const qty = parseInt(req.query.number);
    Product.findByIdAndUpdate(req.params.id, {$inc:{quantity:qty}},{new:true}, function(err, product){
      if(err){
        console.error("Error",err);
        return res.redirect("/");
      }
        return res.json({
          data:{
            product: product,
            message: "product details updated succesfully"
        }});
        
    });  
};

//deleteProduct Controller
module.exports.deleteProduct = function(req, res) {
    Product.findByIdAndRemove(req.params.id, function(err) {
      if (err){
        console.error("Error Deleting Product",err);
        return res.redirect("/");
      }else{
        return res.json({
            data:{
                message:"product deleted"
            }
        });
      }
    });
};