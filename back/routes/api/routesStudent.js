var controllerStudent = require('../../controllers/api/controllerStudent')
const createRouter = require("../../utils/createRouter");
const router = createRouter("/api/student");

router.get('/disciplines', controllerStudent.disciplines);
router.get('/achievements', controllerStudent.achievements);
router.get('/ranking', controllerStudent.ranking);
router.post('/enroll', controllerStudent.enroll);

router.get('/', controllerStudent.index);

const controllerActivityStudent = require('../../controllers/api/controllerActivityStudent');
router.get('/activities', controllerActivityStudent.index);

const controllerActivityGame = require('../../controllers/api/controllerActivityGame');
router.get('/activity/:id/start', controllerActivityGame.startActivity);
router.post('/activity/:id/answer', controllerActivityGame.submitAnswer);
router.get('/activity/:id/question/:questionId/ranking', controllerActivityGame.getQuestionRanking);

module.exports = router;
