var controllerTeacher = require('../../controllers/api/controllerTeacher')
const createRouter = require("../../utils/createRouter");
const router = createRouter("/api/teacher");

router.get('/', controllerTeacher.index);
router.get('/students', controllerTeacher.students);
router.get('/gamification', controllerTeacher.gamification);

module.exports = router;
