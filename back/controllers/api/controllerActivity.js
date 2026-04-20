const fs = require("fs/promises");
const path = require("path");
const { sequelize, Discipline, Activity, Question, Answer } = require("../../models");
const {
    activityIndexQuerySchema,
    activityParamsSchema,
    activityStoreSchema,
} = require("../../validators/activityValidator");

function validationError(res, parsed) {
    return res.status(400).json({
        message: "Dados inválidos",
        errors: parsed.error.issues,
    });
}

const questionUploadsDirectory = path.join(__dirname, "..", "..", "public", "uploads", "questions");

async function removeQuestionImages(imagePaths) {
    const targets = imagePaths
        .filter((value) => typeof value === "string" && value.startsWith("/uploads/questions/"))
        .map((value) => path.join(questionUploadsDirectory, path.basename(value)));

    for (const target of targets) {
        try {
            await fs.unlink(target);
        } catch (error) {
            if (error.code !== "ENOENT") {
                throw error;
            }
        }
    }
}

exports.uploadQuestionImage = async function (req, res) {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "Arquivo de imagem nao enviado" });
        }

        return res.status(201).json({
            message: "Imagem enviada com sucesso",
            path: `/uploads/questions/${req.file.filename}`,
        });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao enviar imagem" });
    }
};

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

exports.store = async function (req, res) {
    try {
        const parsedBody = activityStoreSchema.safeParse(req.body);
        if (!parsedBody.success) {
            return validationError(res, parsedBody);
        }

        const { discipline_id, name, text, active, time_limit, questions } = parsedBody.data;

        const discipline = await Discipline.findOne({
            where: { id: discipline_id, user_id: req.user.id },
            attributes: ["id"],
        });

        if (!discipline) {
            return res.status(404).json({ message: "Disciplina não encontrada" });
        }

        const createdActivity = await sequelize.transaction(async (transaction) => {
            const activity = await Activity.create(
                {
                    discipline_id,
                    name,
                    text,
                    time_limit,
                    ...(active !== undefined ? { active } : {}),
                },
                { transaction }
            );

            for (const questionPayload of questions) {
                const question = await Question.create(
                    {
                        activity_id: activity.id,
                        name: questionPayload.name,
                        text: questionPayload.text,
                        type: questionPayload.type,
                    },
                    { transaction }
                );

                if (questionPayload.type === "boolean") {
                    const normalizedCorrect = questionPayload.answers.find((answer) => answer.correct).text.trim().toLowerCase();

                    const trueFalseAnswers = [
                        {
                            title: "Verdadeiro",
                            text: "Verdadeiro",
                            correct: normalizedCorrect === "verdadeiro",
                        },
                        {
                            title: "Falso",
                            text: "Falso",
                            correct: normalizedCorrect === "falso",
                        },
                    ];

                    await Answer.bulkCreate(
                        trueFalseAnswers.map((answer) => ({ ...answer, question_id: question.id })),
                        { transaction }
                    );

                    continue;
                }

                await Answer.bulkCreate(
                    questionPayload.answers.map((answer) => ({
                        question_id: question.id,
                        title: answer.title,
                        text: answer.text,
                        correct: answer.correct,
                    })),
                    { transaction }
                );
            }

            return activity;
        });

        return res.status(201).json({
            message: `Atividade ${createdActivity.name} criada com sucesso`,
            activity: { id: createdActivity.id, name: createdActivity.name },
        });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao criar atividade" });
    }
};

exports.show = async function (req, res) {
    try {
        const parsedParams = activityParamsSchema.safeParse(req.params);
        if (!parsedParams.success) {
            return validationError(res, parsedParams);
        }

        const { id } = parsedParams.data;

        const activity = await Activity.findOne({
            where: { id },
            attributes: ["id", "name", "text", "active", "time_limit"],
            include: [
                {
                    model: Discipline,
                    attributes: ["id", "name"],
                    required: true,
                    where: { user_id: req.user.id },
                },
                {
                    model: Question,
                    attributes: ["id", "name", "text", "type"],
                    include: [
                        {
                            model: Answer,
                            attributes: ["id", "title", "text", "correct"],
                        },
                    ],
                },
            ],
            order: [[Question, "id", "ASC"], [Question, Answer, "id", "ASC"]],
        });

        if (!activity) {
            return res.status(404).json({ message: "Atividade não encontrada" });
        }

        return res.json(activity);
    } catch (error) {
        return res.status(500).json({ message: "Erro ao buscar atividade" });
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

        const questions = await Question.findAll({
            where: { activity_id: id },
            attributes: ["text"],
            raw: true,
        });

        const imagePaths = questions.map((question) => question.text).filter(Boolean);

        const activityName = activity.name;
        await activity.destroy();
        await removeQuestionImages(imagePaths);

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
