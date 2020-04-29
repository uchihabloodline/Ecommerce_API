const mongoose = require('mongoose');

//defining product schema
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },

    quantity:{
        type: String,
        required: true
    }

},{
    timestamps: true
});

//mongoose.model will compile the model
const Product = mongoose.model('Product', productSchema);

//exporting the model
module.exports = Product;