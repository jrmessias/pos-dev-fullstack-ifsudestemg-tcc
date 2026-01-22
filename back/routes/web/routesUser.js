// var express = require('express');
// var router = express.Router();
var controllerUser = require('../../controllers/web/controllerUser')
const createRouter = require("../../utils/createRouter");
const router = createRouter("/user");

router.get('/', controllerUser.index);

router.get('/create', controllerUser.create);

router.post('/store', controllerUser.store);

router.get('/edit/:id', controllerUser.edit);

router.post('/update/:id', controllerUser.update);

router.get('/delete/:id', controllerUser.delete);

module.exports = router;
