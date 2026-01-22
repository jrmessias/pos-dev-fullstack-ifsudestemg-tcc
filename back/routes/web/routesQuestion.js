// var express = require('express');
// var router = express.Router();
const controllerQuestion = require("../../controllers/web/controllerQuestion");
const createRouter = require("../../utils/createRouter");
const router = createRouter("/question");

router.get('/', controllerQuestion.index);

router.get('/create', controllerQuestion.create);

router.post('/store', controllerQuestion.store);

router.get('/edit/:id', controllerQuestion.edit);

router.post('/update/:id', controllerQuestion.update);

router.get('/delete/:id', controllerQuestion.delete);

router.get('/correct/:id', controllerQuestion.active);

module.exports = router;
