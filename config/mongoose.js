const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/products');

const db = mongoose.connection;

 
db.on('error', console.error.bind(console,"error connecting to DB!!"));

 
db.once('open', function(){
    console.log('Successfully connected to DB!');
});

 
module.exports = db;