const { Achievement, AchievementUser } = require("../../models");
const {
    achievementParamsSchema,
    achievementStoreSchema,
    achievementUpdateSchema,
    achievementAssignSchema,
} = require("../../validators/achievementValidator");

function validationError(res, parsed) {
    return res.status(400).json({
        message: "Dados inv[alidos",
        errors: parsed.error.issues,
    });
}

exports.index = async function (req, res) {
    try {
        const achievements = await Achievement.findAll({
            attributes: ["id", "name", "type", "text", "created_at"],
            raw: true,
            nest: true,
            where: { user_id: req.user.id },
            order: [["name"]],
        });

        return res.json(achievements);
    } catch (error) {
        return res.status(500).json({ message: "Erro ao listar conquistas" });
    }
};

exports.store = async function (req, res) {
    try {
        const parsedBody = achievementStoreSchema.safeParse(req.body);
        if (!parsedBody.success) {
            return validationError(res, parsedBody);
        }
        const { name, type, text } = parsedBody.data;

        const achievement = await Achievement.create({
            name,
            type,
            text,
            user_id: req.user.id,
        });

        return res.status(201).json({
            message: `Conquista ${achievement.name} criada com sucesso`,
            achievement,
        });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao criar conquista. ("+error.message+")" });
    }
};

exports.show = async function (req, res) {
    try {
        const parsedParams = achievementParamsSchema.safeParse(req.params);
        if (!parsedParams.success) {
            return validationError(res, parsedParams);
        }

        const { id } = parsedParams.data;

        const achievement = await Achievement.findOne({
            where: { id, user_id: req.user.id },
            attributes: ["id", "name", "type", "text", "created_at", "updated_at"],
        });

        if (!achievement) {
            return res.status(404).json({ message: "Conquista nao encontrada" });
        }

        return res.json(achievement);
    } catch (error) {
        return res.status(500).json({ message: "Erro ao buscar conquista" });
    }
};

exports.update = async function (req, res) {
    try {
        const parsedParams = achievementParamsSchema.safeParse(req.params);
        if (!parsedParams.success) {
            return validationError(res, parsedParams);
        }

        const parsedBody = achievementUpdateSchema.safeParse(req.body);
        if (!parsedBody.success) {
            return validationError(res, parsedBody);
        }

        const { id } = parsedParams.data;
        const { name, type, text } = parsedBody.data;

        const achievement = await Achievement.findOne({
            where: { id, user_id: req.user.id },
        });

        if (!achievement) {
            return res.status(404).json({ message: "Conquista nao encontrada" });
        }

        await achievement.update({
            ...(name !== undefined ? { name } : {}),
            ...(type !== undefined ? { type } : {}),
            ...(text !== undefined ? { text } : {}),
        });

        return res.json({
            message: `Conquista ${achievement.name} atualizada com sucesso`,
        });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao atualizar conquista" });
    }
};

exports.delete = async function (req, res) {
    try {
        const parsedParams = achievementParamsSchema.safeParse(req.params);
        if (!parsedParams.success) {
            return validationError(res, parsedParams);
        }

        const { id } = parsedParams.data;

        const achievement = await Achievement.findOne({
            where: { id, user_id: req.user.id },
        });

        if (!achievement) {
            return res.status(404).json({ message: "Conquista nao encontrada" });
        }

        const achievementName = achievement.name;
        await achievement.destroy();

        return res.json({
            message: `Conquista ${achievementName} excluida com sucesso`,
        });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao excluir conquista" });
    }
};

exports.users = async function (req, res) {
    try {
        const parsedParams = achievementParamsSchema.safeParse(req.params);
        if (!parsedParams.success) {
            return validationError(res, parsedParams);
        }

        const { id } = parsedParams.data;

        const achievement = await Achievement.findOne({
            where: { id, user_id: req.user.id },
        });

        if (!achievement) {
            return res.status(404).json({ message: "Conquista nao encontrada" });
        }

        const users = await achievement.getStudents({
            attributes: ["id", "name", "email"],
            through: { attributes: ["created_at"] },
            order: [["name"]],
        });

        return res.json(users.map((user) => ({
            id: user.id,
            name: user.name,
            email: user.email,
            achieved_at: user.AchievementUser.created_at,
        })));
    } catch (error) {
        console.error("Erro ao listar alunos da conquista", {
            achievementId: req.params?.id,
            userId: req.user?.id,
            error: error.message,
        });
        return res.status(500).json({ message: "Erro ao listar alunos da conquista" });
    }
};

exports.assign = async function (req, res) {
    try {
        const parsedParams = achievementParamsSchema.safeParse(req.params);
        if (!parsedParams.success) {
            return validationError(res, parsedParams);
        }

        const parsedBody = achievementAssignSchema.safeParse(req.body);
        if (!parsedBody.success) {
            return validationError(res, parsedBody);
        }

        const { id } = parsedParams.data;
        const { user_ids } = parsedBody.data;

        const achievement = await Achievement.findOne({
            where: { id, user_id: req.user.id },
        });

        if (!achievement) {
            return res.status(404).json({ message: "Conquista nao encontrada" });
        }

        const results = { assigned: [], alreadyHad: [], errors: [] };

        for (const userId of user_ids) {
            try {
                const [achievementUser, created] = await AchievementUser.findOrCreate({
                    where: { achievement_id: id, user_id: userId },
                    defaults: { achievement_id: id, user_id: userId },
                });

                if (created) {
                    results.assigned.push(userId);
                } else {
                    results.alreadyHad.push(userId);
                }
            } catch (err) {
                results.errors.push({ userId, error: err.message });
            }
        }

        return res.json({
            message: `Conquista atribuida a ${results.assigned.length} aluno(s)`,
            results,
        });
    } catch (error) {
        console.error("Erro ao atribuir conquista", {
            achievementId: req.params?.id,
            userId: req.user?.id,
            error: error.message,
        });
        return res.status(500).json({ message: "Erro ao atribuir conquista" });
    }
};

exports.unassign = async function (req, res) {
    try {
        const parsedParams = achievementParamsSchema.safeParse({
            id: req.params.id
        });
        
        if (!parsedParams.success) {
            return validationError(res, parsedParams);
        }

        const { id } = parsedParams.data;
        const userId = req.params.userId;

        if (!userId) {
            return res.status(400).json({ message: "ID do aluno nao informado" });
        }

        const achievement = await Achievement.findOne({
            where: { id, user_id: req.user.id },
        });

        if (!achievement) {
            return res.status(404).json({ message: "Conquista nao encontrada" });
        }

        const achievementUser = await AchievementUser.findOne({
            where: { achievement_id: id, user_id: userId }
        });

        if (!achievementUser) {
            return res.status(404).json({ message: "Aluno nao possui esta conquista" });
        }

        await achievementUser.destroy();

        return res.json({ message: "Aluno removido da conquista com sucesso" });
    } catch (error) {
        console.error("Erro ao remover aluno da conquista", {
            achievementId: req.params?.id,
            userId: req.params?.userId,
            teacherId: req.user?.id,
            error: error.message,
        });
        return res.status(500).json({ message: "Erro ao remover aluno da conquista" });
    }
};

module.exports = exports;
