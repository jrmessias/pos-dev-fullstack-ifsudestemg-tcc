const express = require('express');
const auth = require("../middlewares/auth");
const router = express.Router();

router.use('/auth', require('./api/routesAuth'));

router.use(auth);
router.use('/discipline', require('./api/routesDiscipline'));
router.use('/activity', require('./api/routesActivity'));

module.exports = router;
