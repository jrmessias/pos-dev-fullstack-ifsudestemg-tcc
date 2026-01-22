// var express = require('express');
// var router = express.Router();
var controllerAuth = require('../../controllers/api/controllerAuth')
const createRouter = require("../../utils/createRouter");
const auth = require("../../middlewares/auth");
const router = createRouter("/api/auth");

router.post('/login', controllerAuth.login);

router.get('/me', auth, controllerAuth.me);
//
// router.get('/refresh', controllerAuth.refreshToken);

module.exports = router;
