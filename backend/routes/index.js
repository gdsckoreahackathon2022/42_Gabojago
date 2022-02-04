const express = require('express');
const router = express.Router();
const path = require('path');

const user = require('./user');

router.use('/user', user)

module.exports = router;