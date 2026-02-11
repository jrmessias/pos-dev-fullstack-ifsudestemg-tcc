const { Op } = require("sequelize");
const { Discipline, DisciplineUser, Activity, Question, Answer, ActivityAnswerUser } = require("../../models");

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
                            where: {
                                question_id: { [Op.in]: questionIds },
                            },
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

            if (!questionId) {
                continue;
            }

            if (!answeredQuestionIdsByActivityId.has(activityId)) {
                answeredQuestionIdsByActivityId.set(activityId, new Set());
            }

            answeredQuestionIdsByActivityId.get(activityId).add(questionId);
        }

        const completedActivityIds = new Set();
        for (const activity of activities) {
            const activityId = Number(activity.id);
            const totalQuestions = questionCountByActivityId.get(activityId) || 0;
            const answeredQuestions = answeredQuestionIdsByActivityId.get(activityId)?.size || 0;
            const isCompleted = totalQuestions > 0 && answeredQuestions === totalQuestions;

            if (isCompleted) {
                completedActivityIds.add(activityId);
            }
        }

        const summaryByDisciplineId = new Map();
        for (const discipline of disciplines) {
            summaryByDisciplineId.set(Number(discipline.id), {
                totalActivities: 0,
                completedActivities: 0,
            });
        }

        for (const activity of activities) {
            const disciplineId = Number(activity.discipline_id);
            const summary = summaryByDisciplineId.get(disciplineId);

            if (!summary) {
                continue;
            }

            summary.totalActivities += 1;
            if (completedActivityIds.has(Number(activity.id))) {
                summary.completedActivities += 1;
            }
        }

        const data = disciplines.map((discipline) => {
            const summary = summaryByDisciplineId.get(Number(discipline.id)) || {
                totalActivities: 0,
                completedActivities: 0,
            };

            const progress =
                summary.totalActivities > 0
                    ? Math.round((summary.completedActivities / summary.totalActivities) * 100)
                    : 0;

            return {
                id: discipline.id,
                name: discipline.name,
                description: discipline.description,
                totalActivities: summary.totalActivities,
                completedActivities: summary.completedActivities,
                progress,
                xp: 0,
            };
        });

        return res.json(data);
    } catch (error) {
        console.error("Erro ao carregar disciplinas do aluno:", error);
        return res.status(500).json({ message: "Erro ao carregar disciplinas do aluno" });
    }
};

const { studentActivitiesQuerySchema } = require('../../validators/studentValidator');

exports.index = async function (req, res) {
    try {
        const parsed = studentActivitiesQuerySchema.safeParse(req.query);
        if (!parsed.success) {
            return res.status(400).json({ message: 'Dados inválidos', errors: parsed.error.issues });
        }

        const { status = 'all', page = 1, pageSize = 10 } = parsed.data;

        const enrolledLinks = await DisciplineUser.findAll({
            attributes: ["discipline_id"],
            where: {
                user_id: req.user.id,
            },
            raw: true,
        });

        const enrolledDisciplineIds = enrolledLinks.map((link) => Number(link.discipline_id));

        if (enrolledDisciplineIds.length === 0) {
            return res.json({
                totalEnrolledDisciplines: 0,
                totalActivities: 0,
                totalCompletedActivities: 0,
                totalPendingActivities: 0,
                pendingActivities: [],
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
                pendingActivities: [],
            });
        }

        const activitiesWhere = {
            active: true,
            discipline_id: { [Op.in]: disciplineIds },
        };

        const activities = await Activity.findAll({
            attributes: ["id", "name", "discipline_id", "created_at"],
            where: activitiesWhere,
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
                pendingActivities: [],
            });
        }

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
                            where: {
                                question_id: { [Op.in]: questionIds },
                            },
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

            if (!questionId) {
                continue;
            }

            if (!answeredQuestionIdsByActivityId.has(activityId)) {
                answeredQuestionIdsByActivityId.set(activityId, new Set());
            }

            answeredQuestionIdsByActivityId.get(activityId).add(questionId);
        }

        const completedActivityIds = new Set();
        const pendingActivities = [];

        for (const activity of activities) {
            const activityId = Number(activity.id);
            const totalQuestions = questionCountByActivityId.get(activityId) || 0;
            const answeredQuestions = answeredQuestionIdsByActivityId.get(activityId)?.size || 0;
            const isCompleted = totalQuestions > 0 && answeredQuestions === totalQuestions;

            if (isCompleted) {
                completedActivityIds.add(activityId);
            }

            pendingActivities.push({
                id: activity.id,
                name: activity.name,
                disciplineName: activity.Discipline?.name || "-",
                status: isCompleted ? 'completed' : 'pending',
            });
        }

        const filtered = (() => {
            if (status === 'all') return pendingActivities;
            return pendingActivities.filter((a) => (status === 'pending' ? a.status === 'pending' : a.status === 'completed'));
        })();

        const start = (page - 1) * pageSize;
        const paged = filtered.slice(start, start + pageSize);

        return res.json({
            totalEnrolledDisciplines: enrolledDisciplines.length,
            totalActivities: activities.length,
            totalCompletedActivities: completedActivityIds.size,
            totalPendingActivities: pendingActivities.filter((a) => a.status === 'pending').length,
            data: paged,
            meta: { page, pageSize, total: filtered.length, pendingCount: pendingActivities.filter((a) => a.status === 'pending').length, completedCount: completedActivityIds.size },
        });
    } catch (error) {
        console.error("Erro ao carregar dashboard do aluno:", error);
        return res.status(500).json({ message: "Erro ao carregar dashboard do aluno" });
    }
};

module.exports = exports;
