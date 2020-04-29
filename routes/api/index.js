const express = require('express');
const router = express.Router();

router.get('/v1', require('./v1/index'));

module.exports = router;