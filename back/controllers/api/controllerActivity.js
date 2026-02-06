const {Discipline, Activity, User} = require("../../models");

exports.index = async function (req, res) {
    const activities = await Activity.findAll({
        attributes: ['id', 'name', 'active'],
        raw: true,
        nest: true,
        include: [
            {
                model: Discipline,
                attributes: ['name'],
                required: true,
                where: {user_id: req.user.id}
            }
        ]
    });

    res.json(activities);
};

module.exports = exports;
