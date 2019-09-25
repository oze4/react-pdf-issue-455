const express = require('express');
const router = express.Router();
const path = require('path');

const HomeGet = require('./get');
const HomeViews = path.join(__dirname, '../../frontend/build/');

router.use(express.static(HomeViews));
router.use('/', [HomeGet]);
module.exports = router;