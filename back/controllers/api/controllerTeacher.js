const { User, Discipline, Activity, DisciplineUser, ActivityAnswerUser, Level } = require("../../models");
const { Op } = require("sequelize");

exports.index = async function (req, res) {
    try {
        const teacherFilter = { user_id: req.user.id };

        const [
            totalStudents,
            totalActiveDisciplines,
            totalActiveActivities,
            latestActivitiesRaw,
        ] = await Promise.all([
            User.count({
                distinct: true,
                col: "id",
                where: { role: "student" },
                include: [
                    {
                        model: Discipline,
                        attributes: [],
                        through: { attributes: [] },
                        required: true,
                        where: teacherFilter,
                    },
                ],
            }),
            Discipline.count({
                where: {
                    ...teacherFilter,
                    active: true,
                },
            }),
            Activity.count({
                where: { active: true },
                include: [
                    {
                        model: Discipline,
                        attributes: [],
                        required: true,
                        where: teacherFilter,
                    },
                ],
            }),
            Activity.findAll({
                attributes: ["name", "createdAt", "active"],
                raw: true,
                nest: true,
                order: [["createdAt", "DESC"]],
                limit: 5,
                include: [
                    {
                        model: Discipline,
                        attributes: ["name"],
                        required: true,
                        where: teacherFilter,
                    },
                ],
            }),
        ]);

        const latestActivities = latestActivitiesRaw.map((activity) => ({
            name: activity.name,
            disciplineName: activity.Discipline?.name || null,
            date: activity.createdAt,
            active: activity.active,
        }));

        return res.json({
            totalStudents,
            totalActiveDisciplines,
            totalActiveActivities,
            latestActivities,
        });
    } catch (error) {
        //"Erro ao carregar dashboard do professor"
        return res.status(500).json({ message: error.toString() });
    }
};

exports.students = async function (req, res) {
    try {
        const disciplines = await Discipline.findAll({
            where: { user_id: req.user.id },
            attributes: ["id"],
            raw: true,
        });

        const disciplineIds = disciplines.map((d) => d.id);

        if (disciplineIds.length === 0) {
            return res.json([]);
        }

        const disciplineUsers = await DisciplineUser.findAll({
            where: { discipline_id: { [Op.in]: disciplineIds } },
            attributes: ["user_id"],
            raw: true,
        });

        const studentIds = [...new Set(disciplineUsers.map((du) => du.user_id))];

        if (studentIds.length === 0) {
            return res.json([]);
        }

        const students = await User.findAll({
            where: {
                id: { [Op.in]: studentIds },
                role: "student",
            },
            attributes: ["id", "name", "email"],
            order: [["name", "ASC"]],
            raw: true,
        });

        return res.json(students);
    } catch (error) {
        return res.status(500).json({ message: "Erro ao listar alunos" });
    }
};

exports.gamification = async function (req, res) {
    try {
        const sequelize = ActivityAnswerUser.sequelize;

        const disciplines = await Discipline.findAll({
            where: { user_id: req.user.id },
            attributes: ["id"],
            raw: true,
        });

        const disciplineIds = disciplines.map((d) => d.id);

        if (disciplineIds.length === 0) {
            return res.json({
                top3: [],
                stats: { totalXpDistributed: 0, averageLevel: 1, totalMedals: 0 },
            });
        }

        const disciplineUsers = await DisciplineUser.findAll({
            where: { discipline_id: { [Op.in]: disciplineIds } },
            attributes: ["user_id"],
            raw: true,
        });

        const studentIds = [...new Set(disciplineUsers.map((du) => du.user_id))];

        if (studentIds.length === 0) {
            return res.json({
                top3: [],
                stats: { totalXpDistributed: 0, averageLevel: 1, totalMedals: 0 },
            });
        }

        const levels = await Level.findAll({ order: [["xp_required", "ASC"]], raw: true });

        function resolveLevel(xp) {
            let current = levels[0] ?? { level: 1 };
            for (const l of levels) {
                if (xp >= l.xp_required) current = l;
            }
            return current.level ?? 1;
        }

        function buildInitials(name) {
            return name
                .split(" ")
                .filter(Boolean)
                .slice(0, 2)
                .map((w) => w[0].toUpperCase())
                .join("");
        }

        const xpRows = await ActivityAnswerUser.findAll({
            attributes: [
                "user_id",
                [sequelize.fn("SUM", sequelize.col("ActivityAnswerUser.xp")), "totalXp"],
            ],
            where: { user_id: { [Op.in]: studentIds } },
            include: [{ model: User, attributes: ["id", "name"], required: true }],
            group: ["user_id", "User.id", "User.name"],
            order: [[sequelize.fn("SUM", sequelize.col("ActivityAnswerUser.xp")), "DESC"]],
            subQuery: false,
            raw: true,
            nest: true,
        });

        const top3 = xpRows.slice(0, 3).map((row, index) => {
            const name = row.User?.name || "Aluno";
            const xp = Number(row.totalXp) || 0;
            return {
                position: index + 1,
                name,
                initials: buildInitials(name),
                xp,
                level: resolveLevel(xp),
            };
        });

        const totalXpDistributed = xpRows.reduce((sum, row) => sum + (Number(row.totalXp) || 0), 0);

        const levelValues = xpRows.map((row) => resolveLevel(Number(row.totalXp) || 0));
        const averageLevel = levelValues.length > 0
            ? Math.round(levelValues.reduce((a, b) => a + b, 0) / levelValues.length)
            : 1;

        const [achievementsResult] = await sequelize.query(
            `SELECT COUNT(*) AS total
             FROM achievement_user au
             INNER JOIN achievement a ON a.id = au.achievement_id
             WHERE a.user_id = :teacherId
               AND au.user_id IN (:studentIds)`,
            { replacements: { teacherId: req.user.id, studentIds }, type: sequelize.QueryTypes.SELECT }
        );
        const totalAchievements = Number(achievementsResult?.total) || 0;

        return res.json({
            top3,
            stats: { totalXpDistributed, averageLevel, totalAchievements },
        });
    } catch (error) {
        console.error("Erro ao carregar gamificação do professor:", error);
        return res.status(500).json({ message: "Erro ao carregar gamificação" });
    }
};

module.exports = exports;
