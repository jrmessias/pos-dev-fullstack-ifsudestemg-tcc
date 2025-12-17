var express = require('express');
var router = express.Router();
var controllerIndex = require('../controller/controllerIndex')

router.get('/', controllerIndex.index);

module.exports = router;
