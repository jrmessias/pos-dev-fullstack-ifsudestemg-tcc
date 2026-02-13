const { Discipline } = require("../../models");
const generateKey = require("../../helpers/generateKey");
const currentDateToArray = require("../../helpers/currentDateToArray");
const {
    disciplineParamsSchema,
    disciplineStoreSchema,
    disciplineUpdateSchema,
} = require("../../validators/disciplineValidator");

function validationError(res, parsed) {
    return res.status(400).json({
        message: "Dados inválidos",
        errors: parsed.error.issues,
    });
}

exports.index = async function (req, res) {
    try {
        const disciplines = await Discipline.findAll({
            attributes: ["id", "name", "description", "key", "active"],
            raw: true,
            nest: true,
            where: { user_id: req.user.id },
            order: [["name"]],
        });

        return res.json(disciplines);
    } catch (error) {
        return res.status(500).json({ message: "Erro ao listar disciplinas" });
    }
};

exports.store = async function (req, res) {
    try {
        const parsedBody = disciplineStoreSchema.safeParse(req.body);
        if (!parsedBody.success) {
            return validationError(res, parsedBody);
        }
        const { name, description, active } = parsedBody.data;

        const key = generateKey(currentDateToArray());

        const discipline = await Discipline.create({
            name,
            description,
            active,
            key,
            user_id: req.user.id,
        });

        return res.status(201).json({
            message: `Disciplina ${discipline.name} criada com sucesso`,
            discipline,
        });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao criar disciplina" });
    }
};

exports.students = async function (req, res) {
    try {
        const parsedParams = disciplineParamsSchema.safeParse(req.params);
        if (!parsedParams.success) {
            return validationError(res, parsedParams);
        }

        const { id } = parsedParams.data;

        const discipline = await Discipline.findOne({
            where: { id, user_id: req.user.id },
        });

        if (!discipline) {
            return res.status(404).json({ message: "Disciplina não encontrada" });
        }

        const students = await discipline.getUsers({
            attributes: ["id", "name", "email", "created_at"],
            where: { role: "student" },
            through: { attributes: ["created_at"] },
            order: [["name"]],
        });

        return res.json(students.map((student) => ({
            id: student.id,
            name: student.name,
            email: student.email,
            enrolled_at: student.DisciplineUser.created_at
        })));
    } catch (error) {
        console.error("Erro ao listar alunos da disciplina", {
            disciplineId: req.params?.id,
            userId: req.user?.id,
            error: error.message,
        });
        return res.status(500).json({ message: "Erro ao listar alunos da disciplina" });
    }
};

exports.update = async function (req, res) {
    try {
        const parsedParams = disciplineParamsSchema.safeParse(req.params);
        if (!parsedParams.success) {
            return validationError(res, parsedParams);
        }

        const parsedBody = disciplineUpdateSchema.safeParse(req.body);
        if (!parsedBody.success) {
            return validationError(res, parsedBody);
        }

        const { id } = parsedParams.data;
        const { name, description, active } = parsedBody.data;

        const discipline = await Discipline.findOne({
            where: { id, user_id: req.user.id },
        });

        if (!discipline) {
            return res.status(404).json({ message: "Disciplina não encontrada" });
        }

        await discipline.update({
            ...(name !== undefined ? { name } : {}),
            ...(description !== undefined ? { description } : {}),
            ...(active !== undefined ? { active } : {}),
        });

        return res.json({
            message: `Disciplina ${discipline.name} atualizada com sucesso`,
        });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao atualizar disciplina" });
    }
};

exports.delete = async function (req, res) {
    try {
        const parsedParams = disciplineParamsSchema.safeParse(req.params);
        if (!parsedParams.success) {
            return validationError(res, parsedParams);
        }

        const { id } = parsedParams.data;

        const discipline = await Discipline.findOne({
            where: { id, user_id: req.user.id },
        });

        if (!discipline) {
            return res.status(404).json({ message: "Disciplina não encontrada" });
        }

        const disciplineName = discipline.name;
        await discipline.destroy();

        return res.json({
            message: `Disciplina ${disciplineName} excluída com sucesso`,
        });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao excluir disciplina" });
    }
};

exports.toggle = async function (req, res) {
    try {
        const parsedParams = disciplineParamsSchema.safeParse(req.params);
        if (!parsedParams.success) {
            return validationError(res, parsedParams);
        }

        const { id } = parsedParams.data;

        const discipline = await Discipline.findOne({
            where: { id, user_id: req.user.id },
        });

        if (!discipline) {
            return res.status(404).json({ message: "Disciplina não encontrada" });
        }

        const nextActive = !Boolean(discipline.active);
        await discipline.update({ active: nextActive });

        return res.json({
            message: `Disciplina ${discipline.name} ${nextActive ? "ativada" : "inativada"} com sucesso`,
        });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao ativar disciplina" });
    }
};

exports.removeStudent = async function (req, res) {
    try {
        const parsedParams = disciplineParamsSchema.safeParse({
            id: req.params.id
        });
        
        if (!parsedParams.success) {
            return validationError(res, parsedParams);
        }

        const { id } = parsedParams.data;
        const studentId = req.params.studentId;

        if (!studentId) {
            return res.status(400).json({ message: "ID do aluno não informado" });
        }

        const discipline = await Discipline.findOne({
            where: { id, user_id: req.user.id },
        });

        if (!discipline) {
            return res.status(404).json({ message: "Disciplina não encontrada" });
        }

        const DisciplineUser = discipline.sequelize.model('DisciplineUser');
        
        const enrollment = await DisciplineUser.findOne({
            where: { discipline_id: id, user_id: studentId }
        });

        if (!enrollment) {
            return res.status(404).json({ message: "Aluno não encontrado nesta disciplina" });
        }

        await enrollment.destroy();

        return res.json({ message: "Aluno removido da disciplina com sucesso" });
    } catch (error) {
        console.error("Erro ao remover aluno da disciplina", {
            disciplineId: req.params?.id,
            studentId: req.params?.studentId,
            userId: req.user?.id,
            error: error.message,
        });
        return res.status(500).json({ message: "Erro ao remover aluno da disciplina" });
    }
};

module.exports = exports;
