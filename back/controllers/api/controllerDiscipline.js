const {Discipline} = require("../../models");

exports.index = async function (req, res) {

    const disciplines = await Discipline.findAll({
        attributes: ['id', 'name', 'key', 'active'],
        raw: true,
        nest: true,
        where: {user_id: req.user.id}
    });

    res.json(disciplines);
};

module.exports = exports;
