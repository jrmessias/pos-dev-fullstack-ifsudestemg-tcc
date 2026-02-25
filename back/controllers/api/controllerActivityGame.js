const { Activity, Question, Answer, ActivityAnswerUser, User } = require('../../models');
const { submitAnswerSchema } = require('../../validators/activityGameValidator');

function timeLimitToSeconds(timeStr) {
    if (!timeStr) return 30;
    const parts = timeStr.split(':').map(Number);
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
}

function calculateScore(timeTaken, totalTime, maxPoints = 1000) {
    const minPoints = maxPoints * 0.5;
    if (timeTaken >= totalTime) return Math.round(minPoints);
    const timeFraction = timeTaken / totalTime;
    const score = maxPoints - ((maxPoints - minPoints) * timeFraction);
    return Math.round(score);
}

exports.startActivity = async function (req, res) {
    try {
        const activityId = Number(req.params.id);
        const userId = req.user.id;

        const activity = await Activity.findOne({
            where: { id: activityId, active: true },
        });

        if (!activity) {
            return res.status(404).json({ success: false, message: 'Atividade não encontrada' });
        }

        const questions = await Question.findAll({
            where: { activity_id: activityId },
            include: [{ model: Answer, attributes: ['id', 'title', 'text'] }],
            order: [['id', 'ASC']],
        });

        if (questions.length === 0) {
            return res.status(404).json({ success: false, message: 'Atividade sem questões' });
        }

        const answered = await ActivityAnswerUser.findAll({
            attributes: ['question_id'],
            where: { user_id: userId, activity_id: activityId },
            raw: true,
        });

        const answeredIds = new Set(answered.map((r) => Number(r.question_id)));

        const nextQuestion = questions.find((q) => !answeredIds.has(q.id));

        if (!nextQuestion) {
            const totalXp = await ActivityAnswerUser.sum('xp', {
                where: { user_id: userId, activity_id: activityId },
            });

            return res.json({
                success: true,
                data: {
                    finished: true,
                    totalQuestions: questions.length,
                    totalXp: totalXp || 0,
                },
            });
        }

        const questionNumber = answeredIds.size + 1;
        const timeLimitSeconds = timeLimitToSeconds(activity.time_limit);

        return res.json({
            success: true,
            data: {
                finished: false,
                activity: {
                    id: activity.id,
                    name: activity.name,
                    discipline_id: activity.discipline_id,
                    timeLimitSeconds,
                },
                question: {
                    id: nextQuestion.id,
                    name: nextQuestion.name,
                    text: nextQuestion.text,
                    type: nextQuestion.type,
                    answers: nextQuestion.Answers.map((a) => ({
                        id: a.id,
                        title: a.title,
                        text: a.text,
                    })),
                },
                questionNumber,
                totalQuestions: questions.length,
            },
        });
    } catch (error) {
        console.error('Erro startActivity:', error);
        return res.status(500).json({ success: false, message: 'Erro ao iniciar atividade' });
    }
};

exports.submitAnswer = async function (req, res) {
    try {
        const activityId = Number(req.params.id);
        const userId = req.user.id;

        const parsed = submitAnswerSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({ success: false, message: 'Dados inválidos', errors: parsed.error.issues });
        }

        const { question_id, answer_id, answer_time } = parsed.data;

        const activity = await Activity.findOne({ where: { id: activityId, active: true } });
        if (!activity) {
            return res.status(404).json({ success: false, message: 'Atividade não encontrada' });
        }

        const alreadyAnswered = await ActivityAnswerUser.findOne({
            where: { user_id: userId, activity_id: activityId, question_id },
        });
        if (alreadyAnswered) {
            return res.status(409).json({ success: false, message: 'Pergunta já respondida' });
        }

        const timeLimitSeconds = timeLimitToSeconds(activity.time_limit);

        let is_correct = false;
        let correct_answer_id = null;

        const correctAnswer = await Answer.findOne({
            where: { question_id, correct: true },
        });

        if (correctAnswer) {
            correct_answer_id = correctAnswer.id;
            is_correct = answer_id !== null && answer_id === correctAnswer.id;
        }

        const effectiveTime = answer_id === null ? timeLimitSeconds : answer_time;
        const xp = is_correct ? calculateScore(effectiveTime, timeLimitSeconds) : Math.round(1000 * 0.5 * 0);

        await ActivityAnswerUser.create({
            user_id: userId,
            activity_id: activityId,
            question_id,
            answer_id: answer_id ?? null,
            is_correct,
            answer_time: effectiveTime,
            xp: is_correct ? xp : 0,
        });

        return res.json({
            success: true,
            data: { is_correct, xp: is_correct ? xp : 0, correct_answer_id },
        });
    } catch (error) {
        console.error('Erro submitAnswer:', error);
        return res.status(500).json({ success: false, message: 'Erro ao registrar resposta' });
    }
};

exports.getQuestionRanking = async function (req, res) {
    try {
        const activityId = Number(req.params.id);
        const questionId = Number(req.params.questionId);
        const userId = req.user.id;

        const rows = await ActivityAnswerUser.findAll({
            where: { activity_id: activityId, question_id: questionId },
            include: [{ model: User, attributes: ['id', 'name'] }],
            order: [['xp', 'DESC']],
        });

        const ranking = rows.map((r, index) => ({
            position: index + 1,
            name: r.User?.name || 'Aluno',
            xp: r.xp || 0,
            isCurrentUser: Number(r.user_id) === Number(userId),
        }));

        const top3 = ranking.slice(0, 3);
        const currentUserEntry = ranking.find((r) => r.isCurrentUser);
        const currentUserPosition = currentUserEntry ? currentUserEntry.position : null;

        return res.json({
            success: true,
            data: { top3, currentUserPosition },
        });
    } catch (error) {
        console.error('Erro getQuestionRanking:', error);
        return res.status(500).json({ success: false, message: 'Erro ao buscar ranking' });
    }
};

module.exports = exports;
