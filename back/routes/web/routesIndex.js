// var express = require('express');
// var router = express.Router();
var controllerIndex = require('../../controllers/web/controllerIndex')
const createRouter = require("../../utils/createRouter");
const router = createRouter("");

router.get('/', controllerIndex.index);

module.exports = router;
