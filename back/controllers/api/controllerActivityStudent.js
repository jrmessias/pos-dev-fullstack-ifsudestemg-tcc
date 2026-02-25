const { Op } = require('sequelize');
const { Discipline, DisciplineUser, Activity, Question, Answer, ActivityAnswerUser } = require('../../models');
const { studentActivitiesQuerySchema } = require('../../validators/studentValidator');

function buildActivityRow(activity, isCompleted) {
    return {
        id: activity.id,
        name: activity.name,
        discipline: { id: activity.discipline_id, name: activity.Discipline?.name || '-' },
        status: isCompleted ? 'completed' : 'pending',
        dueAt: activity.dueAt || null,
        progress: 0,
    };
}

exports.index = async function (req, res) {
    try {
        const parsed = studentActivitiesQuerySchema.safeParse(req.query);
        if (!parsed.success) {
            return res.status(400).json({ message: 'Dados inválidos', errors: parsed.error.issues });
        }

        const { status = 'all', page = 1, pageSize = 10 } = parsed.data;

        const enrolledLinks = await DisciplineUser.findAll({
            attributes: ['discipline_id'],
            where: { user_id: req.user.id },
            raw: true,
        });

        const enrolledDisciplineIds = enrolledLinks.map((l) => Number(l.discipline_id));

        if (enrolledDisciplineIds.length === 0) {
            return res.json({ data: [], meta: { page, pageSize, total: 0, pendingCount: 0, completedCount: 0 } });
        }

        const activities = await Activity.findAll({
            attributes: ['id', 'name', 'discipline_id', 'created_at'],
            where: { active: true, discipline_id: { [Op.in]: enrolledDisciplineIds } },
            include: [{ model: Discipline, attributes: ['name'], required: true }],
            order: [['name', 'ASC']],
            raw: true,
            nest: true,
        });

        const activityIds = activities.map((a) => a.id);

        if (activityIds.length === 0) {
            return res.json({ data: [], meta: { page, pageSize, total: 0, pendingCount: 0, completedCount: 0 } });
        }

        const questions = await Question.findAll({ attributes: ['id', 'activity_id'], where: { activity_id: { [Op.in]: activityIds } }, raw: true });

        const questionCountByActivityId = new Map();
        const questionIds = [];
        for (const q of questions) {
            const activityId = Number(q.activity_id);
            questionIds.push(Number(q.id));
            questionCountByActivityId.set(activityId, (questionCountByActivityId.get(activityId) || 0) + 1);
        }

        let answeredRows = [];
        if (questionIds.length > 0) {
            try {
                answeredRows = await ActivityAnswerUser.findAll({
                    attributes: ['activity_id'],
                    where: { user_id: req.user.id, activity_id: { [Op.in]: activityIds } },
                    include: [{ model: Answer, attributes: ['question_id'], required: false, where: { question_id: { [Op.in]: questionIds } } }],
                    raw: true,
                    nest: true,
                });
            } catch (e) {
                const isMissing = e?.original?.code === 'ER_NO_SUCH_TABLE';
                if (!isMissing) throw e;
            }
        }

        const answeredQuestionIdsByActivityId = new Map();
        for (const row of answeredRows) {
            const activityId = Number(row.activity_id);
            const questionId = Number(row.Answer?.question_id);
            console.log('%cℹ️ Info:', 'color: #1e69b3; font-weight: bold;', activityId);
            console.log('%cℹ️ Info:', 'color: #1e69b3; font-weight: bold;', questionId);
            // if (!questionId) continue;
            if (!answeredQuestionIdsByActivityId.has(activityId)) answeredQuestionIdsByActivityId.set(activityId, new Set());
            answeredQuestionIdsByActivityId.get(activityId).add(questionId);
        }

        const completedActivityIds = new Set();
        const items = [];
        for (const activity of activities) {
            const activityId = Number(activity.id);
            const totalQ = questionCountByActivityId.get(activityId) || 0;
            const answered = answeredQuestionIdsByActivityId.get(activityId)?.size || 0;
            // console.log('%cℹ️ Info:', 'color: #1e69b3; font-weight: bold;', answered);
            // console.log('%cℹ️ Info:', 'color: #1e69b3; font-weight: bold;', totalQ);
            const isCompleted = totalQ > 0 && answered === totalQ;
            if (isCompleted) completedActivityIds.add(activityId);
            items.push(buildActivityRow(activity, isCompleted));
        }

        const filtered = status === 'all' ? items : items.filter((a) => (status === 'pending' ? a.status === 'pending' : a.status === 'completed'));

        const start = (page - 1) * pageSize;
        const paged = filtered.slice(start, start + pageSize);

        return res.json({ data: paged, meta: { page, pageSize, total: filtered.length, pendingCount: items.filter((a) => a.status === 'pending').length, completedCount: items.filter((a) => a.status === 'completed').length } });
    } catch (error) {
        console.error('Erro activities student:', error);
        return res.status(500).json({ message: 'Erro ao listar atividades do aluno' });
    }
};

module.exports = exports;
