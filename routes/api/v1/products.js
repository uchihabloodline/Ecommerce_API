const express = require('express');
const router = express.Router();
console.log("inside controller of product")
const productController = require('../../../controllers/productController');

//connecting to respective controller files
router.post('/create',productController.addProduct);
router.post('/:id/update_quantity',productController.updateProduct);
router.get('/',productController.getProduct);
router.post('/:id',productController.deleteProduct);

//exporting router module for use
module.exports = router;