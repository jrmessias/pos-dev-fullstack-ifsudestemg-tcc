var controllerActivity = require('../../controllers/api/controllerActivity')
const createRouter = require("../../utils/createRouter");
const uploadQuestionImage = require("../../middlewares/uploadQuestionImage");
const router = createRouter("/api/activity");

router.get('/', controllerActivity.index);

router.post('/upload-question-image', (req, res, next) => {
    uploadQuestionImage.single("image")(req, res, (error) => {
        if (error) {
            return res.status(400).json({ message: error.message });
        }

        return next();
    });
}, controllerActivity.uploadQuestionImage);

router.post('/store', controllerActivity.store);

router.get('/:id', controllerActivity.show);

router.get('/toggle/:id', controllerActivity.toggle);

router.delete('/:id', controllerActivity.delete);

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
