var express = require('express');
var router = express.Router();
var controllerUser = require('../controller/controllerUser')

router.get('/', controllerUser.index);

router.get('/create', controllerUser.create);

router.post('/store', controllerUser.store);

router.get('/edit/:id', controllerUser.edit);

router.post('/update/:id', controllerUser.update);

router.get('/delete/:id', controllerUser.delete);

module.exports = router;
