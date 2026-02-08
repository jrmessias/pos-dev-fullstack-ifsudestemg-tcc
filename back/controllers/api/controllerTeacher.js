const { User, Discipline, Activity } = require("../../models");

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

module.exports = exports;
