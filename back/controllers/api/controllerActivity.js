const { Discipline, Activity } = require("../../models");
const { activityIndexQuerySchema } = require("../../validators/activityValidator");

function validationError(res, parsed) {
    return res.status(400).json({
        message: "Dados inválidos",
        errors: parsed.error.issues,
    });
}

exports.index = async function (req, res) {
    try {
        const parsedQuery = activityIndexQuerySchema.safeParse(req.query);
        if (!parsedQuery.success) {
            return validationError(res, parsedQuery);
        }

        const { discipline } = parsedQuery.data;

        const activities = await Activity.findAll({
            attributes: ["id", "name", "active"],
            raw: true,
            nest: true,
            where: discipline ? { discipline_id: discipline } : {},
            include: [
                {
                    model: Discipline,
                    attributes: ["name"],
                    required: true,
                    where: { user_id: req.user.id },
                },
            ],
        });

        return res.json(activities);
    } catch (error) {
        return res.status(500).json({ message: "Erro ao listar atividades" });
    }
};

module.exports = exports;
