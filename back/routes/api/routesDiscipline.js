var controllerDiscipline = require('../../controllers/api/controllerDiscipline')
const createRouter = require("../../utils/createRouter");
const router = createRouter("/discipline");

router.get('/', controllerDiscipline.index);

router.get('/:id/students', controllerDiscipline.students);
router.delete('/:id/students/:studentId', controllerDiscipline.removeStudent);

router.post('/store', controllerDiscipline.store);

router.post('/:id', controllerDiscipline.update);

router.delete('/:id', controllerDiscipline.delete);

router.get('/toggle/:id', controllerDiscipline.toggle);

module.exports = router;
