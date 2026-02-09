const { Discipline, Activity } = require("../../models");
const {
    activityIndexQuerySchema,
    activityParamsSchema,
} = require("../../validators/activityValidator");

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

exports.delete = async function (req, res) {
    try {
        const parsedParams = activityParamsSchema.safeParse(req.params);
        if (!parsedParams.success) {
            return validationError(res, parsedParams);
        }

        const { id } = parsedParams.data;

        const activity = await Activity.findOne({
            where: { id },
            include: [
                {
                    model: Discipline,
                    attributes: ["id"],
                    required: true,
                    where: { user_id: req.user.id },
                },
            ],
        });

        if (!activity) {
            return res.status(404).json({ message: "Atividade não encontrada" });
        }

        const activityName = activity.name;
        await activity.destroy();

        return res.json({
            message: `Atividade ${activityName} excluída com sucesso`,
        });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao excluir atividade" });
    }
};

exports.toggle = async function (req, res) {
    try {
        const parsedParams = activityParamsSchema.safeParse(req.params);
        if (!parsedParams.success) {
            return validationError(res, parsedParams);
        }

        const { id } = parsedParams.data;

        const activity = await Activity.findOne({
            where: { id },
            include: [
                {
                    model: Discipline,
                    attributes: ["id"],
                    required: true,
                    where: { user_id: req.user.id },
                },
            ],
        });

        if (!activity) {
            return res.status(404).json({ message: "Atividade não encontrada" });
        }

        const nextActive = !Boolean(activity.active);
        await activity.update({ active: nextActive });

        return res.json({
            message: `Atividade ${activity.name} ${nextActive ? "ativada" : "inativada"} com sucesso`,
        });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao alterar status da atividade" });
    }
};

module.exports = exports;
