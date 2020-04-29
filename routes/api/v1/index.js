const express = require('express');
const router = express.Router();


router.get('/product', require('./products'));


module.exports = router;