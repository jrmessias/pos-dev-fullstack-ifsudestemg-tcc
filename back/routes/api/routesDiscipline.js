var controllerDiscipline = require('../../controllers/api/controllerDiscipline')
const createRouter = require("../../utils/createRouter");
const router = createRouter("/discipline");

router.get('/', controllerDiscipline.index);

// router.get('/create', controllerDiscipline.create);
//
// router.post('/store', controllerDiscipline.store);
//
// router.get('/edit/:id', controllerDiscipline.edit);
//
// router.post('/update/:id', controllerDiscipline.update);
//
// router.get('/delete/:id', controllerDiscipline.delete);
//
// router.get('/active/:id', controllerDiscipline.active);
//
// router.get('/inactive/:id', controllerDiscipline.inactive);

module.exports = router;
