const express = require('express');
const app = express();
const db = require('./config/mongoose');
const port = 8000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//routing defined
app.use('/',require('./routes'));

//server starting code
app.listen(port, function(err){
    if(err){
        console.log(`Error running the server on port ${port}`);
    }
    console.log(`Server running good on port No. ${port}`);
});


