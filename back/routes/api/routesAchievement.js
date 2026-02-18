var controllerAchievement = require('../../controllers/api/controllerAchievement')
const createRouter = require("../../utils/createRouter");
const router = createRouter("/api/achievement");

router.get('/', controllerAchievement.index);

router.post('/store', controllerAchievement.store);

router.get('/:id', controllerAchievement.show);

router.post('/:id', controllerAchievement.update);

router.delete('/:id', controllerAchievement.delete);

router.get('/:id/users', controllerAchievement.users);

router.post('/:id/assign', controllerAchievement.assign);

router.delete('/:id/unassign/:userId', controllerAchievement.unassign);

module.exports = router;
