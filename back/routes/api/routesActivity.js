var controllerActivity = require('../../controllers/api/controllerActivity')
const createRouter = require("../../utils/createRouter");
const router = createRouter("/activity");

router.get('/', controllerActivity.index);

// router.get('/create', controllerActivity.create);
//
// router.post('/store', controllerActivity.store);
//
// router.get('/edit/:id', controllerActivity.edit);
//
// router.post('/update/:id', controllerActivity.update);
//
// router.get('/delete/:id', controllerActivity.delete);
//
// router.get('/active/:id', controllerActivity.active);
//
// router.get('/inactive/:id', controllerActivity.inactive);

module.exports = router;
