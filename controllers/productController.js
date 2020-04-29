const mongoose = require('mongoose');

const Product = require('../model/products');


//get product controller
module.exports.getProduct = async function(req,res){
        let products  = await Product.find({})
        .sort('-createdAt');
    
        return res.json(200,{
            products:products
        });
        console.log("Error while fetching products API");
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
    
    // Product.create(req.body, function(err, product){
    //     if(err){
    //         console.error(err);
    //         return  res.redirect('/')
    //     }

       
  //  });
};

//updateProduct Controller
module.exports.updateProduct = function(req,res){
    const qty = parseInt(req.query.number);
    //console.log("params:", req.params.id, req.query.number);
    Product.findByIdAndUpdate(req.params.id, {$inc:{quantity:qty}},{new:true}, function(err, product){
      if(err){
        console.error("Error",err);
        return res.redirect("/");
      }
        //console.log(newProduct);
        // newProduct.quantity=qty;
        // newProduct.save();
        return res.json({data:{
            product: product,
            message: "updated succesfully"
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