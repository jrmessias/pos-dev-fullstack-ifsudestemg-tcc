const { User, Discipline, Activity, DisciplineUser } = require("../../models");
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
                attributes: ["name", "createdAt"],
                raw: true,
                nest: true,
                order: [["createdAt", "DESC"]],
                limit: 10,
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

module.exports = exports;
