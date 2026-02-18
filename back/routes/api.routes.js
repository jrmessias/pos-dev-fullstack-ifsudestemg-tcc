const express = require('express');
const auth = require("../middlewares/auth");
const router = express.Router();

router.use('/auth', require('./api/routesAuth'));

router.use(auth);
router.use('/activity', require('./api/routesActivity'));
router.use('/discipline', require('./api/routesDiscipline'));
router.use('/achievement', require('./api/routesAchievement'));
router.use('/student', require('./api/routesStudent'));
router.use('/teacher', require('./api/routesTeacher'));

module.exports = router;
