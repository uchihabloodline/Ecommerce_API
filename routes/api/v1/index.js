const express = require('express');
const router = express.Router();


router.use('/product', require('./products'));


module.exports = router;