const {Activity, Question} = require("../models");

const title = "Questão";

exports.index = async function (req, res) {
    const {activity} = req.query;

    const questions = await Question.findAll({
        raw: true,
        nest: true,
        where: activity ? {activity_id: activity} : {},
        include: [
            {
                model: Activity,
                attributes: ['name']
            }
        ]}
    );

    const context = {
        title: title,
        questions: questions
    };

    res.render('question/index', context);
};

exports.create = async function (req, res) {

    const activities = await Activity.findAll({
        raw: true,
        order: [
            ['name'],
        ],
    });

    const context = {
        title: title,
        activities: activities
    }

    res.render('question/create', context)
}

exports.store = async function (req, res) {
    const {name, description, activity_id, type} = req.body;

    const newQuestion = {
        name: name,
        description: description,
        type: type,
        activity_id: activity_id
    };

    try {
        await Question.create(newQuestion)

        req.flash('success', `Questão ${name} criada com sucesso!`)
        res.redirect('/question');
    } catch (error) {
        console.log(error)
        res.status(500).send("Erro ao salvar questão: " + error.message);
    }
}

exports.edit = async function (req, res) {

    const id = req.params.id;
    var question = await Question.findByPk(id);

    var activities = await Activity.findAll({
        order: [
            ['name'],
        ],
    });
    activities = activities.map(activity => ({
        ...activity.dataValues,
        selected: activity.id === question.activity_id
    }));

    var context = {
        title: title,
        activities: activities,
        ...question.dataValues
    }

    res.render('question/edit', context);
}

exports.update = async function (req, res) {
    const {id, name, description, activity_id, type} = req.body;

    const updateQuestion = {
        name: name,
        description: description,
        type: type,
        activity_id: activity_id
    };

    try {
        await Question.update(updateQuestion, {
            where: {id: id}
        });

        req.flash('success', `Questão ${name} atualizada com sucesso!`)
        res.redirect('/question');
    } catch (error) {
        res.status(500).send("Erro ao salvar questão: " + error.message);
    }
}

exports.delete = async function (req, res) {
    const {id} = req.params;

    const question = await Question.findOne({where: {id: id}});

    await Question.destroy({
        where: {id: id}
    });

    req.flash('success', `Questão ${question.name} excluída com sucesso!`)

    res.redirect('/question')
}

exports.active = async function (req, res) {
    const {id} = req.params;

    const activity = await Activity.findOne({where: {id: id}});

    await Activity.update({active: true}, {
        where: {id: id}
    });

    req.flash('success', `Atividade ${activity.name} ativada com sucesso!`)

    res.redirect('/question')
}

exports.inactive = async function (req, res) {
    const {id} = req.params;

    const activity = await Activity.findOne({where: {id: id}});

    await Activity.update({active: false}, {
        where: {id: id}
    });

    req.flash('success', `Atividade ${activity.name} inativada com sucesso!`)

    res.redirect('/question')
}

module.exports = exports;
