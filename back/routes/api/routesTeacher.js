var controllerTeacher = require('../../controllers/api/controllerTeacher')
const createRouter = require("../../utils/createRouter");
const router = createRouter("/api/teacher");

router.get('/', controllerTeacher.index);

module.exports = router;
