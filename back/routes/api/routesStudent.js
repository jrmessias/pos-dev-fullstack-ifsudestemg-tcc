var controllerStudent = require('../../controllers/api/controllerStudent')
const createRouter = require("../../utils/createRouter");
const router = createRouter("/api/student");

router.get('/disciplines', controllerStudent.disciplines);
router.post('/enroll', controllerStudent.enroll);

router.get('/', controllerStudent.index);

const controllerActivityStudent = require('../../controllers/api/controllerActivityStudent');
router.get('/activities', controllerActivityStudent.index);

module.exports = router;
