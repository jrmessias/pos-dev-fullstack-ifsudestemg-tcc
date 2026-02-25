const { Op } = require("sequelize");
const { User, Discipline, DisciplineUser, Activity, Question, Answer, ActivityAnswerUser, Achievement, AchievementUser } = require("../../models");

exports.disciplines = async function (req, res) {
    try {
        const enrolledLinks = await DisciplineUser.findAll({
            attributes: ["discipline_id"],
            where: {
                user_id: req.user.id,
            },
            raw: true,
        });

        const enrolledDisciplineIds = enrolledLinks.map((link) => Number(link.discipline_id));

        if (enrolledDisciplineIds.length === 0) {
            return res.json([]);
        }

        const disciplines = await Discipline.findAll({
            attributes: ["id", "name", "description"],
            where: {
                active: true,
                id: { [Op.in]: enrolledDisciplineIds },
            },
            order: [["name", "ASC"]],
            raw: true,
        });

        if (disciplines.length === 0) {
            return res.json([]);
        }

        const disciplineIds = disciplines.map((discipline) => Number(discipline.id));

        const activities = await Activity.findAll({
            attributes: ["id", "discipline_id"],
            where: {
                active: true,
                discipline_id: { [Op.in]: disciplineIds },
            },
            raw: true,
        });

        if (activities.length === 0) {
            return res.json(
                disciplines.map((discipline) => ({
                    id: discipline.id,
                    name: discipline.name,
                    description: discipline.description,
                    totalActivities: 0,
                    completedActivities: 0,
                    progress: 0,
                    xp: 0,
                    avgXp: 0,
                }))
            );
        }

        const activityIds = activities.map((activity) => Number(activity.id));

        const questions = await Question.findAll({
            attributes: ["id", "activity_id"],
            where: {
                activity_id: { [Op.in]: activityIds },
            },
            raw: true,
        });

        const questionCountByActivityId = new Map();
        const questionIds = [];

        for (const question of questions) {
            const activityId = Number(question.activity_id);
            questionIds.push(Number(question.id));
            questionCountByActivityId.set(
                activityId,
                (questionCountByActivityId.get(activityId) || 0) + 1
            );
        }

        let answeredRows = [];
        let xpRows = [];

        if (questionIds.length > 0) {
            try {
                [answeredRows, xpRows] = await Promise.all([
                    ActivityAnswerUser.findAll({
                        attributes: ["activity_id", "question_id"],
                        where: {
                            user_id: req.user.id,
                            activity_id: { [Op.in]: activityIds },
                            question_id: { [Op.in]: questionIds },
                        },
                        raw: true,
                    }),
                    ActivityAnswerUser.findAll({
                        attributes: [
                            "activity_id",
                            [ActivityAnswerUser.sequelize.fn("SUM", ActivityAnswerUser.sequelize.col("xp")), "totalXp"],
                        ],
                        where: {
                            user_id: req.user.id,
                            activity_id: { [Op.in]: activityIds },
                        },
                        group: ["activity_id"],
                        raw: true,
                    }),
                ]);
            } catch (error) {
                const isMissingAnswerTable = error?.original?.code === "ER_NO_SUCH_TABLE";
                if (!isMissingAnswerTable) {
                    throw error;
                }
            }
        }

        const answeredQuestionIdsByActivityId = new Map();
        for (const row of answeredRows) {
            const activityId = Number(row.activity_id);
            const questionId = Number(row.question_id);

            if (!questionId) {
                continue;
            }

            if (!answeredQuestionIdsByActivityId.has(activityId)) {
                answeredQuestionIdsByActivityId.set(activityId, new Set());
            }

            answeredQuestionIdsByActivityId.get(activityId).add(questionId);
        }

        const xpByActivityId = new Map();
        for (const row of xpRows) {
            xpByActivityId.set(Number(row.activity_id), Number(row.totalXp) || 0);
        }

        const summaryByDisciplineId = new Map();
        for (const discipline of disciplines) {
            summaryByDisciplineId.set(Number(discipline.id), {
                totalActivities: 0,
                completedActivities: 0,
                totalQuestions: 0,
                answeredQuestions: 0,
                xp: 0,
                activitiesWithXp: 0,
            });
        }

        for (const activity of activities) {
            const activityId = Number(activity.id);
            const disciplineId = Number(activity.discipline_id);
            const summary = summaryByDisciplineId.get(disciplineId);

            if (!summary) {
                continue;
            }

            const totalQuestionsForActivity = questionCountByActivityId.get(activityId) || 0;
            const answeredQuestionsForActivity = answeredQuestionIdsByActivityId.get(activityId)?.size || 0;
            const activityXp = xpByActivityId.get(activityId) || 0;
            const isCompleted = totalQuestionsForActivity > 0 && answeredQuestionsForActivity === totalQuestionsForActivity;

            summary.totalActivities += 1;
            summary.totalQuestions += totalQuestionsForActivity;
            summary.answeredQuestions += answeredQuestionsForActivity;
            summary.xp += activityXp;

            if (isCompleted) {
                summary.completedActivities += 1;
            }

            if (activityXp > 0) {
                summary.activitiesWithXp += 1;
            }
        }

        const data = disciplines.map((discipline) => {
            const summary = summaryByDisciplineId.get(Number(discipline.id)) || {
                totalActivities: 0,
                completedActivities: 0,
                totalQuestions: 0,
                answeredQuestions: 0,
                xp: 0,
                activitiesWithXp: 0,
            };

            const progress =
                summary.totalQuestions > 0
                    ? Math.round((summary.answeredQuestions / summary.totalQuestions) * 100)
                    : 0;

            const avgXp =
                summary.activitiesWithXp > 0
                    ? Math.round(summary.xp / summary.activitiesWithXp)
                    : 0;

            return {
                id: discipline.id,
                name: discipline.name,
                description: discipline.description,
                totalActivities: summary.totalActivities,
                completedActivities: summary.completedActivities,
                progress,
                xp: summary.xp,
                avgXp,
            };
        });

        return res.json(data);
    } catch (error) {
        console.error("Erro ao carregar disciplinas do aluno:", error);
        return res.status(500).json({ message: "Erro ao carregar disciplinas do aluno" });
    }
};

const { enrollSchema } = require('../../validators/studentValidator');

exports.enroll = async function (req, res) {
    try {
        const parsed = enrollSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({ message: "Dados inválidos", errors: parsed.error.issues });
        }

        const discipline = await Discipline.findOne({
            where: { key: parsed.data.key, active: true },
        });

        if (!discipline) {
            return res.status(404).json({ message: "Disciplina não encontrada ou inativa." });
        }

        const existing = await DisciplineUser.findOne({
            where: { discipline_id: discipline.id, user_id: req.user.id },
        });

        if (existing) {
            return res.status(409).json({ message: "Você já está inscrito nesta disciplina." });
        }

        await DisciplineUser.create({ discipline_id: discipline.id, user_id: req.user.id });

        return res.status(201).json({ message: "Inscrição realizada com sucesso!" });
    } catch (error) {
        console.error("Erro ao inscrever aluno na disciplina:", error);
        return res.status(500).json({ message: "Erro ao realizar inscrição." });
    }
};

exports.index = async function (req, res) {
    try {
        const enrolledLinks = await DisciplineUser.findAll({
            attributes: ["discipline_id"],
            where: { user_id: req.user.id },
            raw: true,
        });

        const enrolledDisciplineIds = enrolledLinks.map((link) => Number(link.discipline_id));

        if (enrolledDisciplineIds.length === 0) {
            return res.json({
                totalEnrolledDisciplines: 0,
                totalActivities: 0,
                totalCompletedActivities: 0,
                totalPendingActivities: 0,
                totalXp: 0,
                data: [],
            });
        }

        const enrolledDisciplines = await Discipline.findAll({
            attributes: ["id", "name"],
            where: {
                active: true,
                id: { [Op.in]: enrolledDisciplineIds },
            },
            order: [["name", "ASC"]],
        });

        const disciplineIds = enrolledDisciplines.map((discipline) => discipline.id);

        if (disciplineIds.length === 0) {
            return res.json({
                totalEnrolledDisciplines: 0,
                totalActivities: 0,
                totalCompletedActivities: 0,
                totalPendingActivities: 0,
                totalXp: 0,
                data: [],
            });
        }

        const activities = await Activity.findAll({
            attributes: ["id", "name", "discipline_id", "created_at"],
            where: {
                active: true,
                discipline_id: { [Op.in]: disciplineIds },
            },
            include: [
                {
                    model: Discipline,
                    attributes: ["name"],
                    required: true,
                },
            ],
            raw: true,
            nest: true,
            order: [["name", "ASC"]],
        });

        const activityIds = activities.map((activity) => activity.id);

        if (activityIds.length === 0) {
            return res.json({
                totalEnrolledDisciplines: enrolledDisciplines.length,
                totalActivities: 0,
                totalCompletedActivities: 0,
                totalPendingActivities: 0,
                totalXp: 0,
                data: [],
            });
        }

        const [questions, totalXp] = await Promise.all([
            Question.findAll({
                attributes: ["id", "activity_id"],
                where: { activity_id: { [Op.in]: activityIds } },
                raw: true,
            }),
            ActivityAnswerUser.sum("xp", {
                where: { user_id: req.user.id, activity_id: { [Op.in]: activityIds } },
            }),
        ]);

        const questionCountByActivityId = new Map();
        const questionIds = [];

        for (const question of questions) {
            const activityId = Number(question.activity_id);
            questionIds.push(Number(question.id));
            questionCountByActivityId.set(
                activityId,
                (questionCountByActivityId.get(activityId) || 0) + 1
            );
        }

        let answeredRows = [];
        if (questionIds.length > 0) {
            try {
                answeredRows = await ActivityAnswerUser.findAll({
                    attributes: ["activity_id"],
                    where: {
                        user_id: req.user.id,
                        activity_id: { [Op.in]: activityIds },
                    },
                    include: [
                        {
                            model: Answer,
                            attributes: ["question_id"],
                            required: true,
                            where: { question_id: { [Op.in]: questionIds } },
                        },
                    ],
                    raw: true,
                    nest: true,
                });
            } catch (error) {
                const isMissingAnswerTable = error?.original?.code === "ER_NO_SUCH_TABLE";
                if (!isMissingAnswerTable) {
                    throw error;
                }
            }
        }

        const answeredQuestionIdsByActivityId = new Map();
        for (const row of answeredRows) {
            const activityId = Number(row.activity_id);
            const questionId = Number(row.Answer?.question_id);

            if (!questionId) continue;

            if (!answeredQuestionIdsByActivityId.has(activityId)) {
                answeredQuestionIdsByActivityId.set(activityId, new Set());
            }

            answeredQuestionIdsByActivityId.get(activityId).add(questionId);
        }

        const completedActivityIds = new Set();
        const pendingData = [];

        for (const activity of activities) {
            const activityId = Number(activity.id);
            const totalQuestions = questionCountByActivityId.get(activityId) || 0;
            const answeredQuestions = answeredQuestionIdsByActivityId.get(activityId)?.size || 0;
            const isCompleted = totalQuestions > 0 && answeredQuestions === totalQuestions;

            if (isCompleted) {
                completedActivityIds.add(activityId);
            } else {
                pendingData.push({
                    id: activity.id,
                    name: activity.name,
                    disciplineName: activity.Discipline?.name || "-",
                    status: "pending",
                });
            }
        }

        return res.json({
            totalEnrolledDisciplines: enrolledDisciplines.length,
            totalActivities: activities.length,
            totalCompletedActivities: completedActivityIds.size,
            totalPendingActivities: pendingData.length,
            totalXp: totalXp ?? 0,
            data: pendingData,
        });
    } catch (error) {
        console.error("Erro ao carregar dashboard do aluno:", error);
        return res.status(500).json({ message: "Erro ao carregar dashboard do aluno" });
    }
};

exports.achievements = async function (req, res) {
    try {
        const user = await User.findByPk(req.user.id);

        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        const achievements = await user.getAchievements({
            attributes: ["name", "type", "text"],
            through: { attributes: ["created_at"] },
            order: [["id", "ASC"]],
        });

        return res.json(
            achievements.map((a) => ({
                id: a.id,
                name: a.name,
                type: a.type,
                text: a.text,
                achieved_at: a.AchievementUser?.created_at ?? null,
            }))
        );
    } catch (error) {
        return res.status(500).json({ message: "Erro ao listar conquistas do aluno" });
    }
};

module.exports = exports;
